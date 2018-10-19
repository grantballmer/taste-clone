import React from 'react';

class MovieTop extends React.Component {
    handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        const { updateWatchlistState } = this.props;
        const { inWatchlist } = this.props.item;
        const toggleWatchlist = !inWatchlist;
        updateWatchlistState(toggleWatchlist);
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

export default MovieTop;