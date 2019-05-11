import React, { Component } from "react";
import "./Board.css";

import MoviesList from "../MoviesList";
import Header from "../Header";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 0
    };
    this.apiKey = process.env.REACT_APP_KEY;
    this.defaultSearchValue = "a";
    this.handleOnSearchChange = this.handleOnSearchChange.bind(this);
    this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
    this._filterByCategory = this._filterByCategory.bind(this);
  }

  componentDidMount() {
    const { categories, movies, getDBCategories, getDBMovies } = this.props;
    if (!categories) {
      getDBCategories({ key: this.apiKey });
    }
    if (!movies) {
      getDBMovies({ key: this.apiKey, value: this.defaultSearchValue });
    }
  }

  handleOnCategoryChange({ target: { value } }) {
    this.setState({ selectedCategory: parseInt(value) });
  }

  handleOnSearchChange({ target: { value } }) {
    const { getDBMovies } = this.props;
    const queryValues = value === "" ? this.defaultSearchValue : value;
    getDBMovies({ key: this.apiKey, value: queryValues });
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
    const { movies, categories } = this.props;

    return (
      <div className="board" data-testid="board">
        {categories && (
          <Header
            onSearchChange={this.handleOnSearchChange}
            onCategoryChange={this.handleOnCategoryChange}
            categories={categories}
          />
        )}
        {movies && <MoviesList movies={this._filterByCategory(movies)} />}
      </div>
    );
  }
}

export default Board;
