import React from "react";
import { Link } from "react-router-dom";

const Pagination = props => {
  const { page, path, dataInfo } = props;
  const { pageNum, total_results, total_pages, numResults } = dataInfo;

  let movieNums = [];

  if (pageNum === total_pages) {
    movieNums[0] = total_results - numResults + 1;
    movieNums[1] = total_results;
  } else {
    movieNums[1] = pageNum * numResults;
    movieNums[0] = movieNums[1] - (numResults - 1);
  }

  console.log(props);

  return (
    <div className="page-pagination">
      {Number(page) === 1 ? (
        <div className="btn-pagination btn-pagination__disabled">Prev</div>
      ) : (
        <Link
          to={`${path}?page=${Number(page) - 1}`}
          className="btn-pagination"
        >
          Prev
        </Link>
      )}
      <p>
        {movieNums[0]} - {movieNums[1]}
      </p>

      {Number(page) === total_pages ? (
        <div className="btn-pagination btn-pagination__disabled">Next</div>
      ) : (
        <Link
          to={`${path}?page=${Number(page) + 1}`}
          className="btn-pagination"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;

// <% if (data.page === data.total_pages) { %>
//                 <% movieNum[0] = data.total_results - data.results.length + 1; %>
//                 <% movieNum[1] = data.total_results; %>
//             <% } else { %>
//                 <% movieNum[1] = data.page * 20; %>
//                 <% movieNum[0] = movieNum[1] - 19 %>
//             <% } %>
