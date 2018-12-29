import React from "react";
import RatingOverlay from "../components/Overlays/RatingOverlay";
import SignupOverlay from "../components/Overlays/SignupOverlay";
import ReviewOverlay from "../components/Overlays/ReviewOverlay";
import SmallBanner from "../components/Banners/SmallBanner";
import Trailer from "../components/MoviePage/Trailer";
import BackgroundImage from "../components/MoviePage/BackgroundImage";
import Details from "../components/MoviePage/Details";
import MovieInfo from "../components/MoviePage/MovieInfo";
import Similar from "../components/MoviePage/Similar";
import { connect } from "react-redux";


class MoviePage extends React.Component {

  render() {
    const { movie, auth } = this.props;

    return (
      <div className="main-padding">
        {auth ? (
          <React.Fragment>
            <RatingOverlay  />
            <ReviewOverlay />
          </React.Fragment>
        ) : (
          <SignupOverlay />
        )}
        <SmallBanner />
        
        {movie.videos.results.length > 0 ? (
          <Trailer movie={movie} />
        ) : (
          <BackgroundImage movie={movie} />
        )}
        
        <Details movie={movie} />
        <MovieInfo movie={movie}/>
        <Similar movie={movie}/>
        

      
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    movie: state.movies.activeMovie,
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(MoviePage);

// https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,credits,similar
