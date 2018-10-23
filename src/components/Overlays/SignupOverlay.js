import React from "react";
import { Link } from "react-router-dom";

const SignupOverlay = props => {
  const { displayOverlay }= props.info;
  const { remove } = props;
  const classVar = displayOverlay ? "overlay-show" : "";
  return (
    <div className={`overlay overlay-signup ${classVar}`}>
      <p className="overlay__cancel" onClick={remove}>
        {"\u2716"}
      </p>
      <div className="popup">
        <h1>Movie Recommendations based on your taste.</h1>
        <div className="popup__content">
          <div className="popup__content--pic">
            <img src="/assets/icons/avatar.svg" alt="male avatar" />
          </div>
          <div className="popup__content--taste">
            <h2>
              0<span>%</span>
            </h2>
            <h3>Taste Profile</h3>
          </div>
          <div className="btn">
            <img src="/assets/icons/facebook.svg" alt="facebook square icon" />
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

export default SignupOverlay;

// &#10006
