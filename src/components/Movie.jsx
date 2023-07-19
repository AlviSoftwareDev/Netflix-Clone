import React from 'react';
import requests from '../Requests';

const Movie = (props) => {
  return (
    <div className="inline-block w-48 rounded-sm overflow-hidden lg:w-64 2xl:w-72 transition ease-in-out duration-300 hover:scale-105">
      <img
        src={`${requests.requestImage}/${props.movie.backdrop_path}`}
        alt={props.movie.title}
        className="cursor-pointer object-cover"
      />
    </div>
  );
};

export default Movie;
