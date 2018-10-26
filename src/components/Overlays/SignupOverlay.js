import React from "react";
import { Link } from "react-router-dom";
import { removeOverlay } from "../../store/actions/movieActions";
import { connect } from "react-redux";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

const SignupOverlay = props => {
  const { displayOverlay } = props.overlay;
  const { removeOverlay } = props;
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
          <div className="btn">
            <img src={`${iconPath}/facebook.svg`} alt="facebook square icon" />
            <p>Calculate your taste</p>
          </div>
        </div>
        <Link to="/login">
          Already have a profile? <span>Log in >></span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    overlay: state.movies.overlay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOverlay: () => dispatch(removeOverlay())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupOverlay);
