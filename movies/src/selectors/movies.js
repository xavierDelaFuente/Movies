import { createSelector } from "reselect";
import selectApiData from "./apiData";

const selectMovies = createSelector(
  selectApiData,
  state => state.movies
);

export default selectMovies;
