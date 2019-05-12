import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../movies";
import * as types from "../../types/movies";
import fetchMock from "fetch-mock";
import fakeMovie from "../../../components/__mocks/fakeMovie";

describe("actions", () => {
  it("should send a movie", () => {
    const expectedAction = {
      type: types.SELECT_MOVIE,
      value: fakeMovie
    };
    expect(actions.setSelectMovie({ value: fakeMovie })).toEqual(
      expectedAction
    );
  });
});
