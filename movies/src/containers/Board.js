import { connect } from "react-redux";
import { fetchCategories, fetchMovies } from "../actions/creators/apiData";
import Board from "../components/Board";
import selectApiData from "../selectors/apiData";

const mapStateToProps = (state, ownProps) => {
  const ApiData = selectApiData(state);
  return {
    movies: ApiData.movies,
    categories: ApiData.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDBCategories: ({ key }) => {
      dispatch(fetchCategories({ key }));
    },
    getDBMovies: ({ key, value }) => {
      dispatch(fetchMovies({ key, value }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
