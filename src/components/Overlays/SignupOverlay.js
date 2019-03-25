import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { facebookSignUp } from "../../store/actions/authActions";
import { removeOverlay } from "../../store/actions/movieActions";

const iconPath = process.env.PUBLIC_URL + "/assets/icons";

class SignupOverlay extends React.Component {
  handleClick = () => {
    this.props.facebookSignUp();
  };

  render() {
    const { displayOverlay } = this.props.overlay;
    const { removeOverlay } = this.props;
    const classVar = displayOverlay ? "overlay-show" : "";

    return (
      <div className={`overlay overlay-signup ${classVar}`}>
        <p className="overlay__cancel" onClick={removeOverlay}>
          {"\u2716"}
        </p>
        <div className="popup">
          <h1>Movie Recommendations based on your taste.</h1>
          <div className="popup__content">
            <div className="popup__content--pic">
              <img src={`${iconPath}/avatar.svg`} alt="male avatar" />
            </div>
            <div className="popup__content--taste">
              <h2>
                0<span>%</span>
              </h2>
              <h3>Taste Profile</h3>
            </div>
            <div className="btn" onClick={this.handleClick}>
              <img
                src={`${iconPath}/facebook.svg`}
                alt="facebook square icon"
              />
              <p>Connect with Facebook</p>
            </div>
          </div>
          <Link to="/login">
            Already have a profile? <span>Log in >></span>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    overlay: state.movies.overlay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOverlay: () => dispatch(removeOverlay()),
    facebookSignUp: () => dispatch(facebookSignUp())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupOverlay);
