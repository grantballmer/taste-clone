import React from "react";
const iconPath = process.env.PUBLIC_URL + '/assets/icons';
const imagePath = process.env.PUBLIC_URL + '/assets/images';

const SmallBanner = () => {
  return (
    <div className="banner banner__small" style={{background: `url(${imagePath}/movielist.jpg)`}}>
      <div className="profile profile__small">
        {/* <img src="./assets/icons/avatar.svg" alt="sample avatar" /> */}
        <img src={`${iconPath}/avatar.svg`} alt="sample avatar" />
        <div className="profile__details">
          <h2>Taste Profile</h2>
          <h2>
            0<span>%</span>
          </h2>
        </div>
      </div>
      <button className="btn btn__smallBanner">
        <img src={`${iconPath}/facebook.svg`} alt="facebook logo" />
        <span>Calculate your taste</span>
      </button>
    </div>
  );
};

export default SmallBanner;
