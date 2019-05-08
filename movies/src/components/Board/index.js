import React, { Component } from "react";
import "./Board.css";

import MoviesList from "../MoviesList";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.apiKey = process.env.REACT_APP_KEY;
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { value } }) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        this.apiKey
      }&query=${value}`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ movies: { ...response.results } });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="board" data-testid="board">
        <form className="search--form">
          <div className="search--container">
            <input
              className="search--input"
              placeholder="Search"
              onChange={this.handleOnChange}
            />
          </div>
        </form>

        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default Board;
