import React, { Component } from "react";
import "./Details.css";

import Header from "../Header";

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="details" data-testid="details">
        <Header />
        <div className="movie" data-testid="movie">
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
        </div>
      </div>
    );
  }
}

export default Details;
