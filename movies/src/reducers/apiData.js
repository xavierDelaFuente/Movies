import {
  FETCH_API_REQUEST,
  FETCH_API_FAILURE,
  FETCH_API_SUCCESS
} from "../actions/types/apiData";

const initialState = {
  apiResponse: {},
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_SUCCESS:
      return {
        ...state,
        apiResponse: {
          ...state.apiResponse,
          [action.apiResponse.key]: action.apiResponse.value
        }
      };
    case FETCH_API_REQUEST:
    case FETCH_API_FAILURE:
    default:
      return state;
  }
};

export default apiData;
