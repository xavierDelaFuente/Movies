import { createSelector } from "reselect";
import selectApiData from "./apiData";

const selectCategories = createSelector(
  selectApiData,
  state => state.categories
);

export default selectCategories;
