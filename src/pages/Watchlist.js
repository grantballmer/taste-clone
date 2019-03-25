import React from "react";
import WatchlistMovie from "../components/Movies/WatchlistMovie";
import { connect } from "react-redux";

const Watchlist = props => {
  const { watchlist } = props;
  const { auth } = props;
  return (
    <div className="main-padding">
      {auth && (
        <React.Fragment>
          <h2 className="page-heading">
            My Watchlist({watchlist ? watchlist.length : 0})
          </h2>
          <div className="movieGrid">
            {watchlist.map(movie => {
              return <WatchlistMovie key={movie.id} movie={movie} />;
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist.watchlist,
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Watchlist);
