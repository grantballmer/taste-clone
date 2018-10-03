import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import Row from "../components/Layout/Row";

const Times = props => {
  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={props.location.pathname} />

      <h1 className="page-heading">Movie Genres</h1>
      <p className="page-description">
        Explore movies and recommendations by genre.{" "}
      </p>
      <Row
        parentRoute="times"
        items={[
          { type: "1950s", imageName: "12-angry-men" },
          { type: "1960s", imageName: "2001-space" },
          { type: "1970s", imageName: "godfather" }
        ]}
      />
      <Row
        parentRoute="times"
        items={[
          { type: "1990s", imageName: "titanic" },
          { type: "2000s", imageName: "dark-knight" },
          { type: "2010s", imageName: "inception" }
        ]}
      />
      <hr />
    </div>
  );
};

export default Times;
