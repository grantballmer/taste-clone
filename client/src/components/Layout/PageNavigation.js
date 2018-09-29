import React from "react";
import { Link } from "react-router-dom";

const PageNavigation = props => {
  let currentRoute = "";
  const routes = props.route.split("/");
  routes.shift();
  return (
    <div className="page-nav">
      {routes.map((route, index) => {
        currentRoute += `/${route}`;
        let capitalizeRoute = route.charAt(0).toUpperCase() + route.substr(1);
        return [
          <Link to={currentRoute}>{capitalizeRoute} </Link>,
          <p>/</p>

          // {index !== routes.length - 1 && (
          //     <p>/</p>
          // )}
        ];
      })}
    </div>
  );
};

export default PageNavigation;
