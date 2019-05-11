import { connect } from "react-redux";
import { recoverAPIdata } from "../actions/creators/apiData";
import App from "../components/App";
import selectApiData from "../selectors/apiData";

const mapStateToProps = (state, ownProps) => {
  const ApiData = selectApiData(state);
  return {
    apiData: ApiData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAPIData: ownState => {
      dispatch(recoverAPIdata());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
