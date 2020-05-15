import { SELECT_MOVIE } from "../actions/types/movies";

const initialState = {};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      const { value } = action;
      return {
        ...state,
        ...value
      };
    default:
      return state;
  }
};

export default movie;
