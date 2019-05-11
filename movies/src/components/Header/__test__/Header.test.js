import React from "react";
import { mount } from "enzyme";
import Header from "../";
import fakeCategoriesJson from "../../__mocks/fakeCategories";

describe("[Component]: Board:", () => {
  let wrapper;
  let categoryChange = jest.fn();
  let searchChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <Header
        categories={fakeCategoriesJson}
        onCategoryChange={categoryChange}
        onSearchChange={searchChange}
      />
    );
  });

  describe("Rerders desired components:", () => {
    test("renders a Header with a selector listing the categories able to filter", () => {
      expect(
        wrapper.find(`[data-testid="search--categories-option"]`)
      ).toHaveLength(fakeCategoriesJson.length);
    });
  });
  describe("Works as desired:", () => {
    test("dispatch onSearchChange when 'search-input' changes", () => {
      wrapper.find(`.search--categories-selector`).simulate("change", {
        target: {
          value: 12
        }
      });
      expect(categoryChange).toHaveBeenCalledTimes(1);
    });
    test("dispatch onCategoryChange when 'search--categories-selecto' changes", () => {
      wrapper.find(`.search--input`).simulate("change", {
        target: {
          value: "la"
        }
      });
      expect(searchChange).toHaveBeenCalledTimes(1);
    });
  });
});
