import React from 'react';
import Movie from "../Movies/Movie";

const PersonMovieGrid = props => {
  const { chunk } = props.item;
  return (
    <React.Fragment> 
      <div className="movieGrid">
          { chunk.map(item=> {
            return (
              <Movie
                key={item.id}
                movie={item}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default PersonMovieGrid;
