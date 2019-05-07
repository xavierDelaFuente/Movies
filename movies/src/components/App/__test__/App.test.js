import React from "react";
import { mount } from "enzyme";
import App from "../";
import { MemoryRouter } from "react-router-dom";
import { welcomeMessage } from "../../../texts/eng.json";

describe("[Component]: App:", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
    test("renders a Link to the Board", () => {
      expect(wrapper.find("Link").props().to).toBe("/");
    });

    test("renders a welcome message", () => {
      expect(
        wrapper.find(`[data-testid='welcome-message']`).props().children
      ).toEqual(welcomeMessage);
    });
  });
});
