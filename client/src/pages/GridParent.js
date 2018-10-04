import React from "react";
import {Link} from "react-router-dom";
import SmallBanner from "../components/Banners/SmallBanner";
import PageNavigation from "../components/Layout/PageNavigation";
import APICalls from "../services/apiCalls/apiCalls";
import MovieGrid from "../components/Grids/MovieGrid";

// class GridParent extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       currentList: {}
//     }
    
//   }
//   }
  
//   // const params = props.match.path.split('/').pop();
//   // const page = props.location.search.split('?page=')[1] || 1;
//   render() {
//     return (
//       <div className="main-padding">
//         <SmallBanner />
//         <PageNavigation route={props.location.pathname} />
//         <h1 className="page-heading">{props.heading}</h1>
//         <h2 className="page-description">
//           Here's a list of the {props.heading.toLowerCase()}. Save movies to the
//           watchlist to track them or rate the ones you’ve seen to build your
//           profile.
//         </h2>
//         <MovieGrid
//           page={page}
//           url={APICalls[props.funcName]}
//           getActiveMovie={props.getActiveMovie}
//         />
//         <div className="pagination">
//           <Link to={`/explore/${params}?page=${Number(page) - 1}`} className="btn-pagination">Prev</Link>
//           <Link to={`/explore/${params}?page=${Number(page) + 1}`} className="btn-pagination">Next</Link>
//         </div>
//       </div>
//     );
//   }
// };

const GridParent = props => {
  const params = props.match.path.split('/').pop();
  const page = props.location.search.split('?page=')[1] || 1;
  
  return (
    <div className="main-padding">
      <SmallBanner />
      <PageNavigation route={props.location.pathname} />
      <h1 className="page-heading">{props.heading}</h1>
      <h2 className="page-description">
        Here's a list of the {props.heading.toLowerCase()}. Save movies to the
        watchlist to track them or rate the ones you’ve seen to build your
        profile.
      </h2>
      <MovieGrid
        page={page}
        url={APICalls[props.funcName]}
        getActiveMovie={props.getActiveMovie}
      />
      {/* <div className="pagination">
      //   <Link to={`/explore/${params}?page=${Number(page) - 1}`} className="btn-pagination">Prev</Link>
      //   <Link to={`/explore/${params}?page=${Number(page) + 1}`} className="btn-pagination">Next</Link>
      // </div> */}
    </div>
  );
};

export default GridParent;