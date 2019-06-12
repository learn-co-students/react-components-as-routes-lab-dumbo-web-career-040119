import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {/*{code here}*/}
        {movies.map(movie => {
        return <div className="movie">
          <h1>{movie.title}</h1>
          <h4>{movie.time}</h4>
          <p>{movie.genres}</p>
        </div>
      })}
    </div>
  );
};

export default Movies;
