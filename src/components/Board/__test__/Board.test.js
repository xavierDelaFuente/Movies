import React from "react";
import { mount } from "enzyme";
import Board from "../";
import { MemoryRouter } from "react-router-dom";
import fakeCategoriesJson from "../../__mocks/fakeCategories";
import fakeMoviesJson from "../../__mocks/fakeMovies";

describe("[Component]: Board:", () => {
  let wrapper;
  const mockGetDBCategories = jest.fn();
  const mockGetDBMovies = jest.fn();
  const mockSelectMovie = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/Board"]}>
        <Board
          getDBCategories={mockGetDBCategories}
          getDBMovies={mockGetDBMovies}
          categories={fakeCategoriesJson}
          movies={fakeMoviesJson}
          selectMovie={mockSelectMovie}
        />
      </MemoryRouter>
    ).find("Board");
  });

  describe("Rerders desired components:", () => {
    test("renders a Board a movies container with a list of movies and a search", () => {
      expect(wrapper.find(`[data-testid='board']`)).toHaveLength(1);
      expect(wrapper.find(`Header`)).toHaveLength(1);
      expect(wrapper.find(`MoviesList`)).toHaveLength(1);
    });

    test("renders as many movies as it receives as props", () => {
      expect(wrapper.find(`[data-testid='movie']`)).toHaveLength(
        fakeMoviesJson.length
      );
    });
  });

  describe("Works as desired:", () => {
    test("stores new category on Header selector change and filters the displayed movies", () => {
      wrapper
        .find(`Header`)
        .find("select")
        .simulate("change", {
          target: {
            value: 28
          }
        });
      wrapper.update();
      expect(wrapper.state().selectedCategory).toBe(28);
      expect(wrapper.find("MoviesList").props().movies).not.toEqual(
        wrapper.props().movies
      );
    });

    test("dispatches mockSelectMovie on movie select", () => {
      wrapper
        .find(`MoviesList`)
        .find("img")
        .at(0)
        .simulate("click");
      expect(mockSelectMovie).toHaveBeenCalled();
      // expect(mockSelectMovie).toHaveBeenCalledWith( expect.objectContaining({ value: {} }))
    });

    test("dispatches mockGetDBMovies on header input change", () => {
      wrapper
        .find(`Header`)
        .find("input")
        .simulate("change", {
          target: {
            value: "se"
          }
        });
      expect(mockGetDBMovies).toHaveBeenCalled();
    });
  });
});
