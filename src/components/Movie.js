import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  const deleteHandler = async () => {
    
    await fetch(`https://connecting-to-database-c9c11-default-rtdb.firebaseio.com/movies/${props.id}.json`, {
      method: 'DELETE'
    });

    props.onDelete();
  }

  return (
    <React.Fragment>
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete</button>
    </li>
    </React.Fragment>
  );
};

export default Movie;