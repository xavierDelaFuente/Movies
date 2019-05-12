import {
  FETCH_API_REQUEST,
  FETCH_API_FAILURE,
  FETCH_API_SUCCESS
} from "../types/apiData";

export const APIFailure = () => {
  return {
    type: FETCH_API_FAILURE
  };
};

export const APIRequest = () => {
  return {
    type: FETCH_API_REQUEST
  };
};

export const APISuccess = apiResponse => {
  return {
    type: FETCH_API_SUCCESS,
    apiResponse
  };
};

export const recoverAPIdata = ({ link, key, keyValue }) => {
  return (dispatch: Function) => {
    fetch(link)
      .then(response => response.json())
      .then(response => {
        dispatch(APISuccess({ key, value: [...response[keyValue]] }));
      })
      .catch(error => console.log(error));
  };
};

export const fetchCategories = ({ key }) => {
  return (dispatch: Function) => {
    dispatch(
      recoverAPIdata({
        link: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
        key: "categories",
        keyValue: "genres"
      })
    );
  };
};

export const fetchMovies = ({ key, value }) => {
  return (dispatch: Function) => {
    dispatch(
      recoverAPIdata({
        link: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${value}`,
        key: "movies",
        keyValue: "results"
      })
    );
  };
};
