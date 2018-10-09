import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="menu">
          <img src="/assets/icons/menu.svg" alt="hamburger menu" />
      </div>
      <div className="navWrapper">
        <Link to="/" className="logo">
          <img src="./assets/icons/popcorn.svg" alt="movie popcorn" />
          <h1>Movies</h1>
        </Link>
        <div className="tabs">
          <div className="tabs__signedOut">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/user/recommendations" exact >Recommendations</NavLink>
            <NavLink to="/user/watchlist" exact >Watchlist</NavLink>
            <NavLink to="/user/friends"exact >Friends</NavLink>
          </div>
          <div className="tabs__search tabs__child">
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/search" exact>Search</NavLink>
          </div>
        </div>  
        </div>
        <div className="signup">
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign up</Link>
        </div>
    </nav>
  );
};

export default Navbar;
