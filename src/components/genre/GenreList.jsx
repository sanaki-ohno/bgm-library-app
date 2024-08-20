import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GenreList = ({ genres }) => {
  const location = useLocation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      <Link
        to="/"
        className={`bg-primary hover:bg-primary-dark text-white font-bold py-6 px-4 rounded-lg shadow-md transition duration-300 ease-in-out text-center flex items-center justify-center ${
          location.pathname === '/' ? 'ring-2 ring-accent' : ''
        }`}
      >
        <span className="text-lg">All</span>
      </Link>
      {genres.map(
        (genre) =>
          genre !== 'All' && (
            <Link
              key={genre}
              to={`/genre/${genre}`}
              className={`bg-primary hover:bg-primary-dark text-white font-bold py-6 px-4 rounded-lg shadow-md transition duration-300 ease-in-out text-center flex items-center justify-center ${
                location.pathname === `/genre/${genre}`
                  ? 'ring-2 ring-accent'
                  : ''
              }`}
            >
              <span className="text-lg">{genre}</span>
            </Link>
          )
      )}
    </div>
  );
};

export default GenreList;
