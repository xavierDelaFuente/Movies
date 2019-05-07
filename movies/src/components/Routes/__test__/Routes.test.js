import React from "react";
import { mount } from "enzyme";
import Routes from "../";
import { MemoryRouter } from "react-router-dom";

describe("[Component]: Routes:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired routes to components:", () => {
    test("renders an App component in the 'default' route", () => {
      expect(wrapper.find(`[data-testid='home']`)).toHaveLength(1);
      expect(wrapper.find(`[data-testid='home']`).props().path).toBe("/");
    });
  });
});