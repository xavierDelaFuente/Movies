import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "../";
import fakeMoviesJson from "../../__mocks/fakeMovies";

describe("[Component]: Board:", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <MoviesList movies={fakeMoviesJson} />
      </MemoryRouter>
    );
  });

  describe("Rerders desired components:", () => {
    test("renders as many movies as it receives as props", () => {
      expect(wrapper.find(`.movie`)).toHaveLength(fakeMoviesJson.length);
    });
  });
});
