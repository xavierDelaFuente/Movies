import React from "react";
import { mount } from "enzyme";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from "../";
import { MemoryRouter } from "react-router-dom";
import { welcomeMessage } from "../../../texts/eng.json";

describe("[Component]: App:", () => {
  let wrapper;
  const mockStore = configureMockStore([ thunk ]);

let store;
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <App />
        </Provider>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });

  describe("Rerders desired components:", () => {
    test("renders the Routes component", () => {
      expect(wrapper.find("Routes").toHaveLength(1);
    });
  });
});
