import React from 'react';
import WatchlistMovie from '../components/Movies/WatchlistMovie';
import { connect } from 'react-redux';

const Watchlist = props => {
    const { watchlist } = props;
    return(
        <div className="main-padding">
            <h2 className="page-heading">My Watchlist({watchlist.length})</h2>
            <div className="movieGrid">
                {watchlist.map(movie => {
                  return (
                    <WatchlistMovie
                      key={movie.id}
                      movie={movie}
                    />
                  );
                })}
              </div>
          </div>
    );
};

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist.watchlist
    };
};

export default connect(mapStateToProps)(Watchlist);