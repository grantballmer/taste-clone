import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from '../../store/actions/authActions'

const Navbar = props => {
  const { auth } = props;
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
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/user/recommendations" >Recommendations</NavLink>
            <NavLink to="/user/watchlist"  >Watchlist</NavLink>
            <NavLink to="/user/friends" >Friends</NavLink>
          </div>
          <div className="tabs__search tabs__child">
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/search" >Search</NavLink>
          </div>
        </div>  
        </div>
        <div className="auth">
          {auth ? (
            <a onClick={props.signOut} className="logout">Log Out</a>
          ) : (  
            <React.Fragment>
              <Link to="/login" className="login">Log In</Link>
              <Link to="/signup" className="signup">Sign up</Link>
            </React.Fragment>
          )}  
        </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return{
    // auth: state.firebase.auth
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
