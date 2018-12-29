import React from 'react';
import { Link } from 'react-router-dom';
import SmallBanner from "../components/Banners/SmallBanner";
import MovieGrid from "../components/Person/PersonMovieGrid";
import APICalls from "../services/apiCalls/apiCalls";

class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      allLoaded: false,
      chunk: [],
      searchResults: [],
      searchType: 'popular',
      iterator: 0,
    };
  }

  componentDidMount() {
    const arr = this.props.match.params.person.split('-');
    const id = arr[arr.length - 1];
    const url = APICalls.person(id);

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    window.fetch(url)
      .then(res => res.json())
      .then(result => {
        let searchResults = result.cast.length > 0 ? result.cast.filter(onlyUnique) : result.crew.filter(onlyUnique);
        searchResults = searchResults.sort((a, b) => b.popularity - a.popularity);

        const chunk = searchResults.slice(0, 20);
        const allLoaded = chunk.length >= searchResults.length ? true : false;

        this.setState({
          searchResults,
          chunk,
          allLoaded,
          isLoaded: true,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(previousProps, previousState) {
    const { search } = this.props.location;

    if (previousProps.location.search !== search) {
      const { searchResults } = this.state;
      let searchType;

      if (search.includes('highest-rated')) {
        searchResults.sort((a, b) => b.vote_average - a.vote_average);
        searchType = 'highest-rated';
      }
      else if (search.includes('recent')) {
        searchResults.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        searchType = 'recent';
      }
      else {
        searchResults.sort((a, b) => b.popularity - a.popularity);
        searchType = 'popular';
      }

      this.setState({
        searchResults,
        searchType,
        chunk: searchResults.slice(0, 20),
        iterator: 0
      });
    }
  }

  handleClick = () => {
    const { searchResults, chunk, iterator } = this.state;
    const start = (iterator + 1) * 20;
    const end = start + 20;

    const allLoaded = end >= searchResults.length ? true : false;

    this.setState({
      allLoaded,
      chunk: chunk.concat(searchResults.slice(start, end)),
      iterator: iterator + 1

    });
  }

  render() {
    const { location, match } = this.props;
    const { pathname } = location;
    const { isLoaded, allLoaded, searchType } = this.state;

    const name = match.params.person.split('-').slice(0, 2).join(' ');
    const popularClass = searchType === 'popular' ? 'active' : '';
    const ratedClass = searchType === 'highest-rated' ? 'active' : '';
    const recentClass = searchType === 'recent' ? 'active' : '';

    return (
      <div className="main-padding person">
        <SmallBanner />
        <h2 className="person__name">{ name }</h2>
        <div className="search-menu">
          <Link to={`${pathname}?type=popular`} className={`search-menu__item ${popularClass}`}>Popular</Link>
          <Link to={`${pathname}?type=highest-rated`} className={`search-menu__item ${ratedClass}`}>Highest Rated</Link>
          <Link to={`${pathname}?type=recent`} className={`search-menu__item ${recentClass}`}>Most Recent</Link>
        </div>
        {isLoaded &&
          <React.Fragment>
            <MovieGrid item={this.state}/>
            {!allLoaded && 
              <button className='btn btn-loadMore' onClick={this.handleClick}>See More Results</button>
            }
          </React.Fragment>
        }
      </div>
    );
  }
}

export default Person;
