import React from "react";
import { Link } from "react-router-dom";
const imagePath = process.env.PUBLIC_URL + '/assets/images';

const RowChild = props => {
  const { path, item } = props;
  const route = item.type.replace(' Movies', '').replace(' ', '-').toLowerCase();
  let alt;
  item.altTag === 'movie poster' ? alt = `${item.imageName.replace('-', ' ')} ${item.altTag}` : alt = item.altTag;

  return (
    <Link
      to={`${path}/${route}`}
      className="row__item"
    >
      <div className="row__item--image">
        <img
          src={`${imagePath}/${item.imageName}.jpg`}
          alt={alt}
        />
      </div>
      <p>{item.type}</p>
    </Link>
  );
};

export default RowChild;
