import React from "react";
import APICalls from "../services/apiCalls/apiCalls";
import SmallBanner from "../components/Banners/SmallBanner";

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      movie: {}
    };
  }

  componentDidMount() {
    const movieID = this.props.location.state;
    const url = APICalls.movieFunc(movieID);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          movie: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, movie } = this.state;

    if (!isLoaded) {
      return (
        <div>
          <SmallBanner />
          <div className="main-padding">
            <div className="trailer" />
          </div>
        </div>
      );
    }
    return (
      <div>
        <SmallBanner />
        <div className="main-padding">
          <div className="trailer">
            <img
              src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
              alt={`${movie.title} poster`}
            />
            {/* {movie.videos.results.length > 0 ? (
              <iframe
                src={`https://www.youtube.com/embed/${
                  movie.videos.results[0].key
                }`}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                alt={`${movie.title} poster`}
              />
            )} */}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;

// https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,credits,similar
