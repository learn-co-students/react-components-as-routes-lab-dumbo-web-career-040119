import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(director => {
        return <div className="director">
          <h1>{director.name}</h1>
          <p>{director.movies}</p>
        </div>
      })}
    </div>
  );
}

export default Directors
