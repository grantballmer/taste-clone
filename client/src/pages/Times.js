import React from "react";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import Row from "../components/Layout/Row";
import { Link } from "react-router-dom";

const Times = props => {
  const { url } = props.match;
  let years = [];
  for (let i = 2018; i > 1979; i--) {
    years.push(
      <Link to={`/explore/times/${i}`} className="row__links">
        <p>{i}</p>
      </Link>
    );
  }
  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={props.location.pathname} />

      <h1 className="page-heading">Movie By Time Periods</h1>
      <p className="page-description">
        Explore movies and recommendations by time period.{" "}
      </p>
      <Row
        path={url}
        items={[
          { type: "1950s", imageName: "12-angry-men" },
          { type: "1960s", imageName: "2001-space" },
          { type: "1970s", imageName: "godfather" }
        ]}
      />
      <Row
        path={url}
        items={[
          { type: "1990s", imageName: "titanic" },
          { type: "2000s", imageName: "dark-knight" },
          { type: "2010s", imageName: "inception" }
        ]}
      />
      <hr />

      <h2 className="row__header">All Time Periods</h2>

      <div className="page-timePeriods">
        <Link to="/explore/times/2010s" className="row__links">
          <p>2010s</p>
        </Link>
        <Link to="/explore/times/2000s" className="row__links">
          <p>2000s</p>
        </Link>
        <Link to="/explore/times/1990s" className="row__links">
          <p>1990s</p>
        </Link>
        <Link to="/explore/times/1980s" className="row__links">
          <p>1980s</p>
        </Link>
        <Link to="/explore/times/1970s" className="row__links">
          <p>1970s</p>
        </Link>
        <Link to="/explore/times/1960s" className="row__links">
          <p>1960s</p>
        </Link>
        <Link to="/explore/times/1950s" className="row__links">
          <p>1950s</p>
        </Link>
        {years}
      </div>
    </div>
  );
};

export default Times;
