import React from "react";
import { uid } from "react-uid";
import { Link } from "react-router-dom";

import "./MoviesList.css";

const MoviesList = ({ movies, onMovieClick }) => {
  return (
    <div className="movies" data-testid="movies-container">
      {movies &&
        movies.map(movie => (
          <div
            className="movie"
            key={uid(movie.title)}
            data-testid="movie"
            onClick={() => onMovieClick({ value: movie })}
          >
            <Link to={`/Details/${movie.id}`}>
              <h2>{movie.title}</h2>

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <div className="movie--row">
                <span>popularity</span>
                <div>{movie.popularity}</div>
              </div>
              <div className="movie--row">
                <span>adult</span>
                <div>{movie.adult}</div>
              </div>
              <div className="movie--row">
                <span>original_language</span>
                <div>{movie.original_language}</div>
              </div>
              <div className="movie--row">
                <span>original_title</span>
                <div>{movie.original_title}</div>
              </div>
              <div className="movie--row">
                <span>overview</span>
                <div>{movie.overview}</div>
              </div>
              <div className="movie--row">
                <span>popularity</span>
                <div>{movie.popularity}</div>
              </div>
              <div className="movie--row">
                <span>release_date</span>
                <div>{movie.release_date}</div>
              </div>
              <div className="movie--row">
                <span>vote_average</span>
                <div>{movie.vote_average}</div>
              </div>
              <div className="movie--row">
                <span>vote_count</span>
                <div>{movie.vote_count}</div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MoviesList;
