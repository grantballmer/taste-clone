import React from 'react';
import { Link } from "react-router-dom";

const SortMenu = props => {
  const { pathname, search } = props.location;

  const sortType = search.length !== 0 ? search.split('?sort=')[1].replace('-', '') : 'relevant';

  const classes = {
    relevantClass: '',
    highestratedClass: '',
    newestClass: '',
    oldestClass: ''
  };

  for (let property in classes) {
    classes[property] = property === sortType + 'Class' ? 'active' : '';
  }

  const { relevantClass, highestratedClass, newestClass, oldestClass } = classes;

  return (
    <div className="search-menu">
      <Link to={`${pathname}?sort=relevant`} className={`search-menu__item ${relevantClass}`}>Most Relevant</Link>
      <Link to={`${pathname}?sort=highest-rated`} className={`search-menu__item ${highestratedClass}`}>Highest-Rated</Link>
      <Link to={`${pathname}?sort=newest`} className={`search-menu__item ${newestClass}`}>Newest</Link>
      <Link to={`${pathname}?sort=oldest`} className={`search-menu__item ${oldestClass}`}>Oldest</Link>
    </div>
  );
};

export default SortMenu;
