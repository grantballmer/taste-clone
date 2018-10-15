import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";
import RatingOverlay from "../components/Overlays/RatingOverlay";
import SignupOverlay from "../components/Overlays/SignupOverlay";
import { headerDetails } from "../services/pageDetails/headerDetails";
import { connect } from "react-redux";

class GridParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      overlayInfo: {
        seenMovie: false,
        like: null
      },
      displayOverlay: false
    };
  }

  updateOverlayInfo = movie => {
    //check to see if movie has already been rated, if so, then overlay styles should change
    const index = this.props.seen.findIndex(obj => obj.id === movie.id);
    const seenMovie = index !== -1;
    const movieRating = seenMovie ? this.props.seen[index].like : null;

    this.setState({
      movie: movie,
      overlayInfo: {
        seenMovie: seenMovie,
        like: movieRating
      },
      displayOverlay: true
    });
  };

  removeOverlay = () => {
    this.setState({
      displayOverlay: false
    });
  };

  render() {
    const { params } = this.props.match;
    const { location, auth } = this.props;
    const page = location.search.split("?page=")[1] || 1;
    const details = headerDetails(params);
    const funcName = params.page || Object.keys(params)[0];

    const optionalArg = params.genre || params.time || null;

    //this.props.match.params.genre || this.props.match.params.time || null;

    return (
      <div className="main-padding">
        {/* first check if displayOverlay is true, and if so check if user is signed in or not
        {this.state.displayOverlay && */}
        {auth ? (
          <RatingOverlay remove={this.removeOverlay} info={this.state} />
        ) : (
          <SignupOverlay remove={this.removeOverlay} info={this.state} />
        )}
        <SmallBanner />
        <PageNavigation route={location.pathname} />
        <h1 className="page-heading">{details.heading}</h1>
        <h2 className="page-description">{details.desc}</h2>
        <MovieGrid
          page={page}
          url={APICalls[funcName](page, optionalArg)}
          updateOverlayInfo={this.updateOverlayInfo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    seen: state.ratings.seen,
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(GridParent);
