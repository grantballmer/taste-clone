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
        if (capitalizeRoute === "Explore") { capitalizeRoute = "All Movies" }
        return (
          <span key={route}>
            <Link to={currentRoute} className="page-nav__link">
              {capitalizeRoute}
            </Link>
            {index !== routes.length - 1 && (
              <span className="page-nav__slash">/</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default PageNavigation;
