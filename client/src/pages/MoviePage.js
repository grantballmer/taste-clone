import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundClass: "show",
      iframeClass: "hide",
      trailerClass: ""
    };
  }

  // componentDidMount() {
  //   const movieID = this.props.location.state;
  //   const url = APICalls.movieFunc(movieID);

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         isLoaded: true,
  //         movie: result
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  handleClick = () => {
    this.setState({
      backgroundClass: "hide",
      iframeClass: "show",
      trailerClass: "trailer__grow"
    });
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="main-padding">
        <SmallBanner />
        <div className={`trailer ${this.state.trailerClass}`}>
          <div
            className={`trailer__background ${this.state.backgroundClass}`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${
                movie.backdrop_path
              })`
            }}
          >
            <div className="trailer__play" onClick={this.handleClick}>
              <img src="../assets/icons/play-button.svg" alt="play button" />
              <p>Trailer</p>
            </div>
          </div>

          <iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={this.state.iframeClass}
          />

          {/* {movie.videos.results.length > 0 ? (
              <iframe
                src={`https://www.youtube.com/embed/${
                  movie.videos.results[0].key
                }`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                alt={`${movie.title} poster`}
              />
            )}  */}
        </div>
      </div>
    );
  }
}

export default MoviePage;

// https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,credits,similar
