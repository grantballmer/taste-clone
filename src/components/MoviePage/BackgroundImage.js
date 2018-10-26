import React from 'react';

const BackgroundImage = props => {
  const { movie } = props;
  return (
    <div className='trailer'>
      <div
        className='trailer__background trailer__background--noVideo'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${
            movie.backdrop_path
          })`
        }}
      >
      </div>
    </div>
  );
};

export default BackgroundImage;
