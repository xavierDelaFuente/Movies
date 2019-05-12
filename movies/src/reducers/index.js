import { combineReducers } from "redux";
import apiData from "./apiData";
import movie from "./movie";

const appReducers = combineReducers({
  apiData,
  movie
});

export default appReducers;
