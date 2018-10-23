import React from 'react';
import { connect } from 'react-redux';

class MovieTop extends React.Component {
    handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        const { isLoggedIn, updateOverlayInfo } = this.props;
        
        if (isLoggedIn) {
            const { updateWatchlist } = this.props;
            const { inWatchlist } = this.props.item;
            const toggleWatchlist = !inWatchlist;
            updateWatchlist(toggleWatchlist);  
        } else {
            updateOverlayInfo(null);
        }
        
    }
    
    render() {
        const { inWatchlist, hasSeen } = this.props.item;
        const topClass = inWatchlist || hasSeen ? 'display' : '';
        const starClass = inWatchlist ? 'display' : '';
        
        return(
            <div className={`movie__top ${topClass}`}>
            {hasSeen && 
              <p className="movie__top--check">{"\u2714"}<span>Seen</span></p>}
              <p className="movie__top--watchlist" onClick={this.handleClick}>
                <span className="watchlist-text">Watchlist</span>
                <span className={`watchlist-star ${starClass}`}>
                {inWatchlist ? "\u2605" : "\u2606"}
                </span>
              </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.authenticated,
  };
};


export default connect(mapStateToProps)(MovieTop);