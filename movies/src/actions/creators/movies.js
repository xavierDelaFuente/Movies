import { SELECT_MOVIE } from "../types/movies";

export const setSelectMovie = ({ value }) => {
  return {
    type: SELECT_MOVIE,
    value
  };
};
