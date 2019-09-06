import reducers from "./index";

const initial = {
  notes: [],
  categories: [],
  activeNote: false,
  activeCategory: false,
  activeCategoryNotes: [],
  keyword: false,
  searchResult: [],
  loading: false
};
describe("Reducers", () => {
  test("should return the initial data", () => {
    expect(reducers(undefined, {})).toEqual(initial);
  });
  test(`should handle dispatching ${constants.LOADING} action`, () => {
    expect(reducers({}, actions.setLoading(true))).toEqual({ loading: true });
  });
  test(`should handle dispatching ${constants.SET} action`, () => {
    expect(reducers({}, actions.setAll([]))).toEqual({ notes: [] });
  });
  test(`should handle dispatching ${constants.SET_CATEGORIES} action`, () => {
    expect(reducers({}, actions.setCategories([]))).toEqual({ categories: [] });
  });
  test(`should handle dispatching ${
    constants.SET_CATEGORY_ITEMS
  } action`, () => {
    expect(reducers({}, actions.setCategoryItems([]))).toEqual({
      activeCategoryNotes: []
    });
  });
  test(`should handle dispatching ${
    constants.SET_SEARCH_RESULTS
  } action`, () => {
    expect(reducers({}, actions.setSearchResult("keyword", []))).toEqual({
      keyword: "keyword",
      searchResult: []
    });
  });
  test(`should handle dispatching ${constants.SET_ACTIVE_NOTE} action`, () => {
    expect(reducers({}, actions.setActiveNote(false))).toEqual({
      activeNote: false
    });
  });
  test(`should handle dispatching ${
    constants.SET_ACTIVE_CATEGORY
  } action`, () => {
    expect(reducers({}, actions.setActiveCategory(false))).toEqual({
      activeCategory: false
    });
  });
});
