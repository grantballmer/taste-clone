import React from "react";
const iconPath = process.env.PUBLIC_URL + "/assets/icons";

const Preloader = () => (
  <div className="preloader-overlay">
    <img src={`${iconPath}/preloader.svg`} alt="preloader" />
  </div>
);

export default Preloader;
