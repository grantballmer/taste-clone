import React from "react";

const SmallBanner = () => {
  return (
    <div className="banner banner__small">
      <div className="profile profile__small">
        <img src="/assets/icons/avatar.svg" alt="sample avatar" />
        <div className="profile__details">
          <h2>Taste Profile</h2>
          <h2>
            0<span>%</span>
          </h2>
        </div>
      </div>
      <button className="btn btn__smallBanner">
        <img src="/assets/icons/facebook.svg" alt="facebook logo" />
        <span>Calculate your taste</span>
      </button>
    </div>
  );
};

export default SmallBanner;
