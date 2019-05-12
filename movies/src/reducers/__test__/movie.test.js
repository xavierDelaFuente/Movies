import reducer from "../movie";
import * as types from "../../actions/types/movies";
import fakeMovie from "../../components/__mocks/fakeMovie";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should handle SELECT_MOVIE", () => {
    expect(
      reducer([], {
        type: types.SELECT_MOVIE,
        value: fakeMovie
      })
    ).toEqual(fakeMovie);
  });
});
