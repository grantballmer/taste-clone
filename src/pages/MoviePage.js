import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import Trailer from "../components/Trailer/Trailer";
import BackgroundImage from "../components/Trailer/BackgroundImage"
import { connect } from "react-redux";

class MoviePage extends React.Component {

  render() {
    const { movie } = this.props;

    return (
      <div className="main-padding">
        <SmallBanner />
        {movie.videos.results.length > 0 ? (
          <Trailer movie={movie} />
        ) : (
          <BackgroundImage movie={movie} />
        )}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    movie: state.activeMovie.activeMovie
  };
};

export default connect(mapStateToProps)(MoviePage);

// https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,credits,similar
