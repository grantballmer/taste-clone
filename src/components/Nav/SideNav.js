import React from 'react';
import { Link } from 'react-router-dom';
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

const SideNav = ({ load, handleClick }) => {

  return (
    <div className={`sideNav ${load ? 'displaySideNav' : ''}`}>
    
      <div className="cancel" onClick={handleClick}>
        <img src={`${iconPath}/cancel.svg`} alt="cancel" />
      </div>
      
      <div className="sideNav__menu">
      
        <Link to="/login" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-sign-in-alt"></i>
          <p>Log In</p>
        </Link>
        
        <Link to="/search" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-search"></i>
          <p>Search</p>
        </Link>
        
        <hr />
      
        <Link to="/explore/trending" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-chart-line"></i>
          <p>Trending</p>
        </Link>
        
        <Link to="/explore" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-globe"></i>
          <p>Explore</p>
        </Link>
        
        <Link to="/explore/genres" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-film"></i>
          <p>Genres</p>
        </Link>
        
        <Link to="/explore/times" className="sideNav__menu--link" onClick={handleClick}>
          <i className="fas fa-video"></i>
          <p>Times</p>
        </Link>
        
      </div>
    </div>
  );
};

export default SideNav;
