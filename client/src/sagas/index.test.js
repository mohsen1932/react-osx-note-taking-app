import { runSaga } from "redux-saga";
import {
  getNotes,
  getCategories,
  getActiveCategory,
  getActiveCategoryNotes,
  getAllNotes,
  addNote,
  deleteNote,
  updateNote,
  getAllCategories,
  addCategory,
  getKeyword,
  getSearchResult
} from "./index";
import * as services from "../utils/services";
import * as helpers from "../utils/helpers";

describe("Sagas", () => {
  test("getNotes", () => {
    const state = { app: { notes } };
    const res = getNotes(state);
    expect(res).toEqual(notes);
  });
  test("getCategories", () => {
    const state = { app: { categories } };
    const res = getCategories(state);
    expect(res).toEqual(categories);
  });
  test("getActiveCategory", () => {
    const state = { app: { activeCategory: false } };
    const res = getActiveCategory(state);
    expect(res).toEqual(false);
  });
  test("getActiveCategoryNotes", () => {
    const state = { app: { activeCategoryNotes: notes } };
    const res = getActiveCategoryNotes(state);
    expect(res).toEqual(notes);
  });
  test("getKeyword", () => {
    const state = { app: { keyword: false } };
    const res = getKeyword(state);
    expect(res).toEqual(false);
  });
  test("getSearchResult", () => {
    const state = { app: { searchResult: notes } };
    const res = getSearchResult(state);
    expect(res).toEqual(notes);
  });
  test("getAllNotes success", async () => {
    services.getNotes = jest.fn(() =>
      Promise.resolve({
        data: notes
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, getAllNotes, actions.getAll()).done;
    expect(services.getNotes.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(dispatchedActions).toContainEqual(actions.setAll(notes));
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("getAllNotes failure", async () => {
    services.getNotes = jest.fn(() => Promise.reject("an error occurred."));
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    global.alert = jest.fn();
    await runSaga(fakeStore, getAllNotes, actions.getAll()).done;
    expect(services.getNotes.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(alert).toBeCalled();
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("addNote success", async () => {
    services.addNote = jest.fn(() =>
      Promise.resolve({
        data: notes[2]
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(
      fakeStore,
      addNote,
      actions.addNote(notes[2].body, notes[2].categoryId, notes[2].date)
    ).done;
    expect(services.addNote.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(dispatchedActions).toContainEqual(actions.setAll([notes[2]]));
    expect(dispatchedActions).toContainEqual(actions.setActiveNote(notes[2]));
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("addNote failure", async () => {
    services.addNote = jest.fn(() => Promise.reject("an error occurred."));
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    global.alert = jest.fn();
    await runSaga(
      fakeStore,
      addNote,
      actions.addNote(notes[2].body, notes[2].categoryId, notes[2].date)
    ).done;
    expect(services.addNote.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(alert).toBeCalled();
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("deleteNote success", async () => {
    services.deleteNote = jest.fn(() =>
      Promise.resolve({
        data: {}
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, deleteNote, actions.deleteNote(notes[0].id)).done;
    expect(services.deleteNote.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    const result = helpers.deleteFromArray(notes, notes[0].id);
    expect(dispatchedActions).toContainEqual(actions.setAll(result));
    expect(dispatchedActions).toContainEqual(actions.setActiveNote(false));
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("deleteNote failure", async () => {
    services.deleteNote = jest.fn(() => Promise.reject("an error occurred."));
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    global.alert = jest.fn();
    await runSaga(fakeStore, deleteNote, actions.deleteNote()).done;
    expect(services.deleteNote.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(alert).toBeCalled();
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("updateNote success", async () => {
    services.updateNote = jest.fn(() =>
      Promise.resolve({
        data: notes[2]
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, updateNote, actions.updateNote(notes[2])).done;
    expect(services.updateNote.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(dispatchedActions).toContainEqual(actions.setAll(notes));
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("updateNote failure", async () => {
    services.updateNote = jest.fn(() => Promise.reject("an error occurred."));
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    global.alert = jest.fn();
    await runSaga(fakeStore, updateNote, actions.updateNote()).done;
    expect(services.updateNote.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(alert).toBeCalled();
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("getAllCategories success", async () => {
    services.getCategories = jest.fn(() =>
      Promise.resolve({
        data: categories
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          categories: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, getAllCategories, actions.getCategories()).done;
    expect(services.getCategories.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(dispatchedActions).toContainEqual(actions.setCategories(categories));
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("getAllCategories failure", async () => {
    services.getCategories = jest.fn(() =>
      Promise.reject("an error occurred.")
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          notes: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    global.alert = jest.fn();
    await runSaga(fakeStore, getAllCategories, actions.getCategories()).done;
    expect(services.getCategories.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(alert).toBeCalled();
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("addCategory success", async () => {
    services.addCategory = jest.fn(() =>
      Promise.resolve({
        data: categories[0]
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          categories: [],
          notes
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(
      fakeStore,
      addCategory,
      actions.addCategory(categories[0].title)
    ).done;
    expect(services.addCategory.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(dispatchedActions).toContainEqual(
      actions.setCategories([categories[0]])
    );
    expect(dispatchedActions).toContainEqual(
      actions.setActiveCategory(categories[0])
    );
    const categoryItems = helpers.filterCategoryItems(notes, categories[0]);
    expect(dispatchedActions).toContainEqual(
      actions.setCategoryItems(categoryItems)
    );
    expect(dispatchedActions).toContainEqual(actions.setActiveNote(false));
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
  test("addCategory failure", async () => {
    services.addCategory = jest.fn(() => Promise.reject("an error occurred."));
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          categories: []
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    global.alert = jest.fn();
    await runSaga(
      fakeStore,
      addCategory,
      actions.addCategory(categories[0].title)
    ).done;
    expect(services.addCategory.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.setLoading(true));
    expect(alert).toBeCalled();
    expect(dispatchedActions).toContainEqual(actions.setLoading(false));
  });
});
