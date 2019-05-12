import { connect } from "react-redux";
import { fetchCategories } from "../actions/creators/apiData";
import Details from "../components/Details";
import selectMovie from "../selectors/movie";

const mapStateToProps = (state, ownProps) => {
  const selectedMovie = parseInt(ownProps.match.params.number);
  const movie = selectMovie(state);
  return {
    movie: movie || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDBCategories: ({ key }) => {
      dispatch(fetchCategories({ key }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
