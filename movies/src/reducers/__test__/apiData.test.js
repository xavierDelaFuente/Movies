import reducer from "../../reducers/apiData";
import * as types from "../../actions/types/apiData";
import fakeMoviesJson from "../../components/__mocks/fakeMovies";
import fakeCategoriesJson from "../../components/__mocks/fakeCategories";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ apiResponse: {} });
  });

  it("should handle FETCH_API_REQUEST", () => {
    expect(
      reducer([], {
        type: types.FETCH_API_REQUEST
      })
    ).toEqual([]);
  });
  it("should handle FETCH_API_FAILURE", () => {
    expect(
      reducer([], {
        type: types.FETCH_API_FAILURE
      })
    ).toEqual([]);
  });

  it("should handle FETCH_API_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.FETCH_API_SUCCESS,
        apiResponse: {
          key: "categories",
          value: fakeMoviesJson
        }
      })
    ).toEqual({ apiResponse: { categories: fakeMoviesJson } });
    expect(
      reducer([], {
        type: types.FETCH_API_SUCCESS,
        apiResponse: {
          key: "categories",
          value: fakeCategoriesJson
        }
      })
    ).toEqual({ apiResponse: { categories: fakeCategoriesJson } });
  });
});
