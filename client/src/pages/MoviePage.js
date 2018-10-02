import React from "react";
import APICalls from "../services/apiCalls/apiCalls";
import SmallBanner from "../components/Banners/SmallBanner";

class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLoaded: false,
    //   movie: {}
    // };
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

  render() {
    const { movie } = this.props;
    

    // if (!isLoaded) {
    //   return (
    //     <div className="main-padding" >
    //       <SmallBanner />
    //       <div className="trailer" />
    //     </div>
    //   );
    // }
    return (
      <div className="main-padding">
        <SmallBanner />
        <div className="trailer">
             {movie.videos.results.length > 0 ? (
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
            )} 
          </div>
      </div>
    );
  }
}

export default MoviePage;

// https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,credits,similar
