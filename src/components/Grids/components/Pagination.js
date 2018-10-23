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

  return (
    <div className="page-pagination">
      {/* if user on first page then disable prev button */}
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

      {/* if user on last page then disable next button */}
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
