import axios from 'axios';
import { React, useEffect, useState } from 'react';
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from 'react-icons/bi';
import Movie from './Movie';

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.endpoint).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movies);

  const slideLeft = () => {
    let slider = document.getElementById(`slider-${props.id}`);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    let slider = document.getElementById(`slider-${props.id}`);
    slider.scrollLeft += 500;
  };

  return (
    <div className="w-full">
      <h2 className="px-8 font-semibold text-lg text-white">{props.title}</h2>
      <div className="relative flex items-center w-full group">
        <BiSolidChevronLeftCircle
          onClick={slideLeft}
          size={48}
          color="white"
          className="hidden absolute left-0 opacity-50 cursor-pointer z-10 transition ease-in-out duration-300 hover:opacity-100 group-hover:block"
        />
        {/* Movies */}
        <div
          id={`slider-${props.id}`}
          className="w-full px-8 py-4 overflow-x-scroll whitespace-nowrap scroll-smooth space-x-1 scrollbar-none"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <BiSolidChevronRightCircle
          onClick={slideRight}
          size={48}
          color="white"
          className="hidden absolute right-0 opacity-50 cursor-pointer z-10 transition ease-in-out duration-300 hover:opacity-100 group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
