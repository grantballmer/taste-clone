import React from "react";
import { Link } from "@reach/router";

const MainBanner = () => {
  return (
    <div className="banner banner__main">
      <div className="profile">
        <img src="./assets/icons/avatar.svg" alt="sample avatar" />
        <div className="profile__details">
          <p>Taste Profile</p>
          <p>
            0<span>%</span>
          </p>
        </div>
      </div>
      <h1>Movie recommendations based on your taste.</h1>
      <button className="btn">Calculate your taste</button>
      <Link to="/signup">Start Without Facebook</Link>
    </div>
  );
};

export default MainBanner;
