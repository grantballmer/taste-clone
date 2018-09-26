import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src="./assets/icons/popcorn.svg" alt="movie popcorn" />
      </Link>
      <Link to="/">Home</Link>
      <div className="nav-left nav-faded">
        <Link to="/user/recommendations">Recommendations</Link>
        <Link to="/user/watchlist">Watchlist</Link>
        <Link to="/user/friends">Friends</Link>
      </div>
      <Link to="/explore">Explore</Link>
      <Link to="/search">Search</Link>
      <div className="account">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navigation;
