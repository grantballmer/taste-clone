import React from 'react';
import { Link } from 'react-router-dom';

const Credits = ({ movie }) => {

  const director = movie.credits.crew.filter(person => person.job === 'Director')[0];
  const writers = movie.credits.crew.filter(person => person.job === 'Writer' || person.job === 'Screenplay');
  const actors = movie.credits.cast.slice(0, 5);

  const writersElements = writers.map((writer, index) => {
    const comma = index !== writers.length - 1 ? ', ' : '';
    const formatName = `${writer.name.replace(' ', '-').toLowerCase()}`;
    return <Link to={`/people/${formatName}-${writer.id}`} key={writer.id}>{writer.name + comma}</Link>;
  });

  const actorsElements = actors.map((actor, index) => {
    const comma = index !== movie.genres.length - 1 ? ', ' : '';
    const formatName = `${actor.name.replace(' ', '-').toLowerCase()}`;
    return <Link to={`/people/${formatName}-${actor.id}`} key={actor.id}>{actor.name + comma}</Link>;
  });

  const rating = movie.vote_average * 10;

  return (

    <div className="white-container">
                  
      <div className="crew">
        <p>Director: </p>
        {director && 
          <Link to={`/people/${director.name.replace(' ','-').toLowerCase()}-${director.id}`}>{director.name}</Link>
        }
      </div>
                    
      <div className="crew">
          <p>Writer: </p>
          { writersElements }
      </div>
                    
      <div className="crew">
        <p>Main Cast: </p> { actorsElements }
      </div>
      
      <div className="ratings-container">
        <p>Ratings: </p>
        <div className="ratings">
          <div className="empty-stars"></div>
          <div className="full-stars" style={{ width: rating}}></div>
        </div>
      </div>
      
    </div>
  );
};

export default Credits;
