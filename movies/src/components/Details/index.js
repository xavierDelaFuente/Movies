import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Header>
          <div className="details--header">
            <Link to={`/`}>
              <img
                src="https://image.flaticon.com/icons/svg/118/118739.svg"
                width="24"
                height="24"
                alt="Left arrow free icon"
              />
            </Link>
            <h2>{movie.title}</h2>
          </div>
        </Header>
        <div className="movie--details" data-testid="movie">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="movie--details__img"
            />
          </div>
          <div className="movie--details__info">
            <div className="movie--column">
              <span>popularity</span>
              <div>{movie.popularity}</div>
            </div>
            <div className="movie--column">
              <span>adult</span>
              <div>{movie.adult}</div>
            </div>
            <div className="movie--column">
              <span>original_language</span>
              <div>{movie.original_language}</div>
            </div>
            <div className="movie--column">
              <span>original_title</span>
              <div>{movie.original_title}</div>
            </div>
            <div className="movie--column">
              <span>overview</span>
              <div>{movie.overview}</div>
            </div>
            <div className="movie--column">
              <span>popularity</span>
              <div>{movie.popularity}</div>
            </div>
            <div className="movie--column">
              <span>release_date</span>
              <div>{movie.release_date}</div>
            </div>
            <div className="movie--column">
              <span>vote_average</span>
              <div>{movie.vote_average}</div>
            </div>
            <div className="movie--column">
              <span>vote_count</span>
              <div>{movie.vote_count}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
