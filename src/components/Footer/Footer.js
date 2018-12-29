import React from 'react';
import { Link } from 'react-router-dom';
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

const Footer = props => {
  return (
    <footer className="footer">
      <Link to="/" className="footer__image">
        <img src={`${iconPath}/popcorn.svg`} alt="movie popcorn" />
      </Link>
      <div className="footer__col">
        <h5>Movies</h5>
        <Link to="/explore">Explore</Link>
        <Link to="/explore/genres">Genres</Link>
        <Link to="/explore/times">Times</Link>
        <Link to="/search">Search</Link>
      </div>
      <div className="footer__col">
        <h5>Profile</h5>
        <Link to="/login">Log In</Link>
      </div>
      
    </footer>
  );
};

export default Footer;
