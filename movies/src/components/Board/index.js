import React, { Component } from "react";
import "./Board.css";

import MoviesList from "../MoviesList";
import Header from "../Header";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      categories: [],
      selectedCategory: 0
    };
    this.apiKey = process.env.REACT_APP_KEY;
    this.defaultSearchValue = "a";
    this.handleOnSearchChange = this.handleOnSearchChange.bind(this);
    this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
    this._filterByCategory = this._filterByCategory.bind(this);
  }

  componentDidMount() {
    if (!this.state.categories.length) {
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          this.apiKey
        }&language=en-US`
      )
        .then(response => response.json())
        .then(response => {
          this.setState({ categories: [...response.genres] });
        })
        .catch(error => console.log(error));
    }
    if (!this.state.movies.length) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          this.apiKey
        }&query=${this.defaultSearchValue}`
      )
        .then(response => response.json())
        .then(response => {
          this.setState({ movies: [...response.results] });
        })
        .catch(error => console.log(error));
    }
  }

  handleOnCategoryChange({ target: { value } }) {
    this.setState({ selectedCategory: parseInt(value) });
  }

  handleOnSearchChange({ target: { value } }) {
    const queryValues = value === "" ? this.defaultSearchValue : value;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        this.apiKey
      }&query=${queryValues}`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ movies: [...response.results] });
      })
      .catch(error => console.log(error));
  }

  _filterByCategory(movies) {
    const { selectedCategory } = this.state;
    let filteredMovies = [];
    selectedCategory !== 0
      ? (filteredMovies = movies.filter(movie =>
          movie.genre_ids.includes(selectedCategory)
        ))
      : (filteredMovies = movies);
    return filteredMovies;
  }
  render() {
    const { movies, categories } = this.state;

    return (
      <div className="board" data-testid="board">
        <Header
          onSearchChange={this.handleOnSearchChange}
          onCategoryChange={this.handleOnCategoryChange}
          categories={categories}
        />
        <MoviesList movies={this._filterByCategory(movies)} />
      </div>
    );
  }
}

export default Board;
