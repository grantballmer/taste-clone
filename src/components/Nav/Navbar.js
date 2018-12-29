import React from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SideNav from './SideNav';
import { signOut } from '../../store/actions/authActions'
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadSideNav: false
    }
  }

  handleClick = e => {
    const { loadSideNav } = this.state;
    this.setState({ loadSideNav: !loadSideNav });
  }


  render() {
    const { auth } = this.props;
    const { loadSideNav } = this.state;

    return (
      <nav>

        <div className="navWrapper">
          <SideNav load={loadSideNav} handleClick={this.handleClick}/>
          <div className="menu" onClick={this.handleClick} >
            <img src={`${iconPath}/menu.svg`} alt="hamburger menu" />
          </div>
          
          <Link to="/" className="logo">
            <img src={`${iconPath}/popcorn.svg`} alt="movie popcorn" />
            <h1>Movies</h1>
          </Link>
          
          <div className="tabs">
          
            <div className="tabs__child">
              <NavLink to="/" exact >Home</NavLink>
                {auth ? (
                  <div className="tabs__signedIn">
                    <NavLink to="/user/recommendations" style={{ textDecoration: 'none' }}>Recommendations</NavLink>
                    <NavLink to="/user/watchlist" exact >Watchlist</NavLink>
                    { /* <NavLink to="/user/friends" >Friends</NavLink> */}
                  </div>
                ) : (
                  <div className="tabs__signedOut">
                    <a>Recommendations</a>
                    <a>Watchlist</a>
                   {/*  <a>Friends</a> */}
                  </div>
                )}  
              </div>
              
            <div className="tabs__search tabs__child">
            
              <NavLink to="/explore" exact style={{ textDecoration: 'none' }}>Explore</NavLink>
              <NavLink to="/search" exact >Search</NavLink>
              
            </div>
          </div>
          
          <div className="auth">
            {auth ? (
              <a onClick={this.props.signOut} className="logout">Log Out</a>
            ) : (  
              <React.Fragment>
                <Link to="/login" className="login">Log In</Link>
                <Link to="/signup" className="signup">Sign up</Link>
              </React.Fragment>
            )}  
          </div>
          
        </div>
      </nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    // auth: state.firebase.auth
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
