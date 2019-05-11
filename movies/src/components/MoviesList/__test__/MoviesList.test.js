import React from "react";
import { mount } from "enzyme";
import MoviesList from "../";
import fakeMoviesJson from "../../__mocks/fakeMovies";

describe("[Component]: Board:", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MoviesList movies={fakeMoviesJson} />);
  });

  describe("Rerders desired components:", () => {
    test("renders a Board a movies container with a list of movies and a search", () => {
      expect(wrapper.find(`.movie`)).toHaveLength(fakeMoviesJson.length);
    });
  });
});
