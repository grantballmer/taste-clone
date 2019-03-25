import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const iconPath = process.env.PUBLIC_URL + "/assets/icons";

const SideNav = ({ load, handleClick, auth }) => {
  return (
    <div className={`sideNav ${load ? "displaySideNav" : ""}`}>
      <div className="cancel" onClick={handleClick}>
        <img src={`${iconPath}/cancel.svg`} alt="cancel" />
      </div>

      <div className="sideNav__menu">
        <Link to="/login" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-sign-in-alt" />
          <p>Log In</p>
        </Link>

        <Link
          to="/signup"
          className="sideNav__menu--link"
          onClick={handleClick}
        >
          <i className="fas fa-user-plus" />
          <p>Sign Up</p>
        </Link>

        <Link
          to="/search"
          className="sideNav__menu--link"
          onClick={handleClick}
        >
          <i className="fas fa-search" />
          <p>Search</p>
        </Link>

        <hr />

        {auth ? (
          <React.Fragment>
            <Link
              to="/user/watchlist"
              className={`sideNav__menu--link signed-in`}
              onClick={handleClick}
            >
              <i className="fas fa-clipboard-check" />
              <p>Watchlist</p>
            </Link>

            <Link
              to="/user/recommendations"
              className="sideNav__menu--link signed-in"
              onClick={handleClick}
            >
              <i className="far fa-thumbs-up" />
              <p>Recommendations</p>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a className={`sideNav__menu--link signed-out`}>
              <i className="fas fa-clipboard-check" />
              <p>Watchlist</p>
            </a>

            <a className="sideNav__menu--link signed-out">
              <i className="far fa-thumbs-up" />
              <p>Recommendations</p>
            </a>
          </React.Fragment>
        )}
        <hr />

        <Link
          to="/explore/trending"
          className="sideNav__menu--link"
          onClick={handleClick}
        >
          <i className="fas fa-chart-line" />
          <p>Trending</p>
        </Link>

        <Link
          to="/explore"
          className="sideNav__menu--link"
          onClick={handleClick}
        >
          <i className="fas fa-globe" />
          <p>Explore</p>
        </Link>

        <Link
          to="/explore/genres"
          className="sideNav__menu--link"
          onClick={handleClick}
        >
          <i className="fas fa-film" />
          <p>Genres</p>
        </Link>

        <Link
          to="/explore/times"
          className="sideNav__menu--link"
          onClick={handleClick}
        >
          <i className="fas fa-video" />
          <p>Times</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(SideNav);
