import React from "react";
import { Link } from "@reach/router";
import { connect } from 'react-redux';
import { facebookSignUp } from "../../store/actions/authActions";

class MainBanner extends React.Component {

  handleClick = () => {
    this.props.facebookSignUp();
  }

  render() {
    return (
      <div className="banner banner__main">
        <div className="profile">
          <img src="./assets/icons/avatar.svg" alt="sample avatar" />
          <div className="profile__details">
            <h2>Taste Profile</h2>
            <h2>0<span>%</span></h2>
          </div>
        </div>
        <h1>Movie recommendations based on your taste.</h1>
        <button className="btn btn__banner" onClick={this.handleClick} >
          <img src="./assets/icons/facebook.svg" alt="facebook logo" />
          <span>Calculate your taste</span>
        </button>
        <Link to="/signup" className="banner__link">Start Without Facebook</Link>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    facebookSignUp: () => dispatch(facebookSignUp())
  };
};

export default connect(null, mapDispatchToProps)(MainBanner);
