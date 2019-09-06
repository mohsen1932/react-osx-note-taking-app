describe("Actions", () => {
  test("should create an action to set loading status", () => {
    let expectedAction = {
      type: constants.LOADING,
      payload: {
        loading: true
      }
    };
    expect(actions.setLoading(true)).toEqual(expectedAction);
    expectedAction = {
      type: constants.LOADING,
      payload: {
        loading: false
      }
    };
    expect(actions.setLoading(false)).toEqual(expectedAction);
  });
  test("should create an action to get all notes", () => {
    let expectedAction = {
      type: constants.GET,
      payload: {}
    };
    expect(actions.getAll()).toEqual(expectedAction);
  });
  test("should create an action to set all notes", () => {
    let expectedAction = {
      type: constants.SET,
      payload: {
        notes: []
      }
    };
    expect(actions.setAll([])).toEqual(expectedAction);
  });
  test("should create an action to add a note", () => {
    let expectedAction = {
      type: constants.ADD_ITEM,
      payload: {
        body: "body",
        categoryId: "categoryId",
        date: "date"
      }
    };
    expect(actions.addNote("body", "categoryId", "date")).toEqual(
      expectedAction
    );
  });
  test("should create an action to delete a note", () => {
    let expectedAction = {
      type: constants.DELETE_ITEM,
      payload: {
        id: 1
      }
    };
    expect(actions.deleteNote(1)).toEqual(expectedAction);
  });
  test("should create an action to update a note", () => {
    let expectedAction = {
      type: constants.UPDATE_ITEM,
      payload: {
        note: {}
      }
    };
    expect(actions.updateNote({})).toEqual(expectedAction);
  });
  test("should create an action to get all categories", () => {
    let expectedAction = {
      type: constants.GET_CATEGORIES,
      payload: {}
    };
    expect(actions.getCategories()).toEqual(expectedAction);
  });
  test("should create an action to set all categories", () => {
    let expectedAction = {
      type: constants.SET_CATEGORIES,
      payload: {
        categories: []
      }
    };
    expect(actions.setCategories([])).toEqual(expectedAction);
  });
  test("should create an action to set active category notes", () => {
    let expectedAction = {
      type: constants.SET_CATEGORY_ITEMS,
      payload: {
        activeCategoryNotes: []
      }
    };
    expect(actions.setCategoryItems([])).toEqual(expectedAction);
  });
  test("should create an action to add a category ", () => {
    let expectedAction = {
      type: constants.ADD_CATEGORY,
      payload: {
        title: "title"
      }
    };
    expect(actions.addCategory("title")).toEqual(expectedAction);
  });
  test("should create an action to set search result ", () => {
    let expectedAction = {
      type: constants.SET_SEARCH_RESULTS,
      payload: {
        keyword: "keyword",
        searchResult: []
      }
    };
    expect(actions.setSearchResult("keyword", [])).toEqual(expectedAction);
  });
  test("should create an action to set active category ", () => {
    let expectedAction = {
      type: constants.SET_ACTIVE_CATEGORY,
      payload: {
        activeCategory: {}
      }
    };
    expect(actions.setActiveCategory({})).toEqual(expectedAction);
  });
  test("should create an action to set active note ", () => {
    let expectedAction = {
      type: constants.SET_ACTIVE_NOTE,
      payload: {
        activeNote: {}
      }
    };
    expect(actions.setActiveNote({})).toEqual(expectedAction);
  });
});
