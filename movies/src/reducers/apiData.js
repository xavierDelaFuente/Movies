import {
  FETCH_API_REQUEST,
  FETCH_API_FAILURE,
  FETCH_API_SUCCESS
} from "../actions/types/apiData";

const initialState = {
  apiResponse: {},
  error: null,
  character: -1
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return { ...state, error: action.error };
    case FETCH_API_FAILURE:
      return { ...state, error: null };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        apiResponse: {
          ...state.apiResponse,
          [action.apiResponse.key]: action.apiResponse.value
        }
      };
    default:
      return state;
  }
};

export default apiData;
