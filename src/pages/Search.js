import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import RatingOverlay from "../components/Overlays/RatingOverlay";
import SignupOverlay from "../components/Overlays/SignupOverlay";
import SearchResults from "../components/Search/SearchResults";
import APICalls from '../services/apiCalls/apiCalls';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      searchVal: '',
      searchResults: [],
      searchType: 'movie',
      page: 1,
    };
  }

  componentDidUpdate(previousProps, previousState) {
    const { search } = this.props.location;

    if (previousProps.location.search !== search) {
      const searchType = search.includes('person') ? 'person' : 'movie';

      this.setState({
        searchType,
        isLoaded: false,
        searchResults: [],
        searchVal: '',
        page: 1
      });
    }
  }

  handleChange = e => {
    const searchVal = e.target.value;
    this.setState({ searchVal });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchData();
  }

  fetchData = () => {
    const { search } = this.props.location;
    const { searchVal, page, searchResults } = this.state;
    const searchType = search.includes('person') ? 'person' : 'movie';
    const url = APICalls.search(searchType, searchVal, page);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          searchResults: [...searchResults, ...result.results],
          page: page + 1,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { pathname } = this.props.location;
    const { searchType } = this.state;
    const { auth } = this.props;
    const movieClass = searchType === 'movie' ? 'active' : '';
    const personClass = searchType === 'person' ? 'active' : '';
    const searchPlaceholder = searchType === 'movie' ? 'movie title' : "person's name";

    return (
      <div className="main-padding">
        {auth ? (
          <RatingOverlay  />
        ) : (
          <SignupOverlay />
        )}
        <h1 className="page-heading">Search</h1>
        <div className="search-menu">
          <Link to={`${pathname}?type=movie`} className={`search-menu__item ${movieClass}`}>Movie</Link>
          <Link to={`${pathname}?type=person`} className={`search-menu__item ${personClass}`}>Person</Link>
        </div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type='search' name="q" placeholder={`Enter a ${searchPlaceholder}`} onChange={this.handleChange} value={this.state.searchVal} />
        </form>
        <SearchResults item={this.state} fetchData={this.fetchData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Search);
