import React from "react";
import { mount } from "enzyme";
import Routes from "../";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Routes:", () => {
  let wrapper;

  describe("Rerders desired routes to components:", () => {
    test("renders an App component in the 'default' route", () => {
      wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(`[data-testid='home']`)).toHaveLength(1);
      expect(wrapper.find(`[data-testid='home']`).props().path).toBe("/");
    });

    test("renders an App component in the 'default' route", () => {
      wrapper = mount(
        <MemoryRouter initialEntries={["/Board"]}>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(`[data-testid='board']`)).toHaveLength(1);
      expect(wrapper.find(`[data-testid='board']`).props().path).toBe("/Board");
    });
  });
});
