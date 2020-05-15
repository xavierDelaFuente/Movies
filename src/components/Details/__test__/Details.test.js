import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Details from "../";
import fakeMovieJson from "../../__mocks/fakeMovie";

describe("[Component]: Details:", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/Details/123213"]}>
        <Details movie={fakeMovieJson} />
      </MemoryRouter>
    );
  });

  describe("Rerders desired components:", () => {
    test("renders a detailed movie", () => {
      expect(wrapper.find(`.details`)).toHaveLength(1);
    });
  });
});
