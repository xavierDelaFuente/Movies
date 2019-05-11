import React from "react";
import { mount } from "enzyme";
import Board from "../";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Board:", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/Board"]}>
        <Board />
      </MemoryRouter>
    ).find("Board");
  });

  describe("Rerders desired components:", () => {
    test("renders a Board a movies container with a list of movies and a search", () => {
      expect(wrapper.find(`[data-testid='board']`)).toHaveLength(1);
      expect(wrapper.find(`Header`)).toHaveLength(1);
      expect(wrapper.find(`MoviesList`)).toHaveLength(1);
    });

    test("renders no movies on inital rendering", () => {
      expect(wrapper.find(`[data-testid='movie']`)).toHaveLength(0);
    });
  });
});
