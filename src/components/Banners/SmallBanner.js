import React from "react";

const SmallBanner = () => {
  return (
    <div className="banner banner__small">
      <div className="profile profile__small">
        <img src="../assets/icons/avatar.svg" alt="sample avatar" />
        <div className="profile__details">
          <p>Taste Profile</p>
          <p>
            0<span>%</span>
          </p>
        </div>
      </div>
      <button className="btn btn__smallBanner">Calculate your taste</button>
    </div>
  );
};

export default SmallBanner;
