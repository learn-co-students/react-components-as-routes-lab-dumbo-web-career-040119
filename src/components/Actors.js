import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div className="actor">
          <h1>{actor.name}</h1>
          <p>{actor.movies}</p>
        </div>
      })}
    </div>
  );
};

export default Actors;
