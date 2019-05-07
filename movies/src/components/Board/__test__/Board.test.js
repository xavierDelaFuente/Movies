import React from "react";
import { mount } from "enzyme";
import Board from "../";
import { MemoryRouter } from "react-router-dom";
import { welcomeMessage } from "../../../texts/eng.json";
import fakeMoviesJson from "../../../texts/fakeData";

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
    test("renders a Board a movies container", () => {
      expect(wrapper.find(`[data-testid='board']`)).toHaveLength(1);
      expect(wrapper.find(`[data-testid='movies-container']`)).toHaveLength(1);
    });

    test("renders as many movies as there are on fakeDataJson", () => {
      expect(wrapper.find(`[data-testid='movie']`)).toHaveLength(
        fakeMoviesJson.length
      );
    });
  });
});
