import React from 'react';
import { Link } from 'react-router-dom';
const iconPath = process.env.PUBLIC_URL + '/assets/icons';

const Person = props => {
  const { id, name, profile_path } = props.item;
  const formatName = name.replace(' ', '-').toLowerCase();
  return (
    <Link 
          to={`/people/${formatName}-${id}`}
          className="movie"
          data-movieid={id}
          onClick={this.handleClick}
          data-click="link"
        >
        <div className="movie__poster--wrapper">
          <div className="movie__poster">
            {profile_path != null ? (
              <img
                src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
                alt={`${name} poster`}
              />
            ) : (
              <img
                src={`${iconPath}/popcorn.svg`}
                alt={`popcorn`}
                style={{alignSelf: 'center', maxWidth: '85%'}}
              />
            )}
          </div>
        </div>
        <div className="movie__btm movie__btm--person">
          <p className="movie__title">{name}</p>
        </div>
      </Link>
  );
};

export default Person;
