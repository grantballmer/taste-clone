import React from "react";
import Movie from "../Movies/Movie";
import PersonBox from "./PersonBox";

const SearchResults = props => {
  const { isLoaded, searchType, searchResults } = props.item;
  const { fetchData, showLoadingOverlay } = props;

  return (
    <React.Fragment>
      <div className="movieGrid">
        {isLoaded &&
          searchType === "movie" &&
          searchResults.map(item => {
            return (
              <Movie
                key={item.id}
                movie={item}
                showLoadingOverlay={showLoadingOverlay}
              />
            );
          })}

        {isLoaded &&
          searchType === "person" &&
          searchResults.map(item => {
            return <PersonBox key={item.id} item={item} />;
          })}
      </div>
      {isLoaded && (
        <button className="btn btn-loadMore" onClick={fetchData}>
          See More Results
        </button>
      )}
    </React.Fragment>
  );
};

export default SearchResults;
