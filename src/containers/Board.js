import { connect } from "react-redux";
import { fetchCategories, fetchMovies } from "../actions/creators/apiData";
import { setSelectMovie } from "../actions/creators/movies";
import Board from "../components/Board";
import selectMovies from "../selectors/movies";
import selectCategories from "../selectors/categories";

const mapStateToProps = (state, ownProps) => {
  const categories = selectCategories(state);
  const movies = selectMovies(state);
  return {
    movies: movies,
    categories: categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDBCategories: ({ key }) => {
      dispatch(fetchCategories({ key }));
    },
    getDBMovies: ({ key, value }) => {
      dispatch(fetchMovies({ key, value }));
    },
    selectMovie: ({ value }) => {
      dispatch(setSelectMovie({ value }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
