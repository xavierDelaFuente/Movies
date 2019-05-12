import { connect } from "react-redux";
import Details from "../components/Details";
import selectMovie from "../selectors/movie";

const mapStateToProps = (state, ownProps) => {
  const movie = selectMovie(state);
  return {
    movie: movie || {}
  };
};

export default connect(mapStateToProps)(Details);
