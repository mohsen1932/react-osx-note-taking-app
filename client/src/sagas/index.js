import { put, takeEvery, call, select } from "redux-saga/effects";
import * as actions from "../actions";
import * as constants from "../constants";
import * as service from "../utils/services";
import * as helpers from "../utils/helpers";

const errorMessage = "Something went wrong, Please try again later!";
export const getNotes = state => state.app.notes;
export const getCategories = state => state.app.categories;
export const getActiveCategory = state => state.app.activeCategory;
export const getActiveCategoryNotes = state => state.app.activeCategoryNotes;
export const getKeyword = state => state.app.keyword;
export const getSearchResult = state => state.app.searchResult;

export function* getAllNotes(action) {
  try {
    yield put(actions.setLoading(true));
    const response = yield call(service.getNotes);
    yield put(actions.setAll(response.data));
  } catch (error) {
    alert(errorMessage);
  } finally {
    yield put(actions.setLoading(false));
  }
}
export function* getAllNotesSaga() {
  yield takeEvery(constants.GET, getAllNotes);
}

export function* addNote(action) {
  const { body, categoryId, date } = action.payload;
  try {
    yield put(actions.setLoading(true));
    // send create request to Api
    const response = yield call(service.addNote, { body, categoryId, date });
    const newNote = response.data;
    // create on redux store
    const result = yield select(getNotes);
    const newList = [...result, ...[newNote]];
    yield put(actions.setAll(newList));
    yield put(actions.setActiveNote(newNote));
    const activeCategory = yield select(getActiveCategory);
    if (activeCategory) {
      const activeCategoryNotes = yield select(getActiveCategoryNotes);
      const newNotesList = [...activeCategoryNotes, ...[newNote]];
      yield put(actions.setCategoryItems(newNotesList));
    }
  } catch (error) {
    alert(errorMessage);
  } finally {
    yield put(actions.setLoading(false));
  }
}
export function* addNoteSaga() {
  yield takeEvery(constants.ADD_ITEM, addNote);
}

export function* deleteNote(action) {
  const { id } = action.payload;
  try {
    yield put(actions.setLoading(true));
    // send delete request to Api
    yield call(service.deleteNote, { id });
    // delete from redux store
    const list = yield select(getNotes);
    const result = helpers.deleteFromArray(list, id);
    yield put(actions.setAll(result));
    yield put(actions.setActiveNote(false));
    const activeCategory = yield select(getActiveCategory);
    if (activeCategory) {
      const activeCategoryNotes = yield select(getActiveCategoryNotes);
      const newNotesList = helpers.deleteFromArray(activeCategoryNotes, id);
      yield put(actions.setCategoryItems(newNotesList));
    }
    const keyword = yield select(getKeyword);
    if (keyword) {
      const searchResult = yield select(getSearchResult);
      const newRes = helpers.deleteFromArray(searchResult, id);
      yield put(actions.setSearchResult(keyword, newRes));
    }
  } catch (error) {
    alert(errorMessage);
  } finally {
    yield put(actions.setLoading(false));
  }
}
export function* deleteNoteSaga() {
  yield takeEvery(constants.DELETE_ITEM, deleteNote);
}

export function* updateNote(action) {
  const { note } = action.payload;
  try {
    yield put(actions.setLoading(true));
    // send update request to Api
    yield call(service.updateNote, { note });
    // update on redux store
    const list = yield select(getNotes);
    //const newArray = [note];
    //const result = getList.map(obj => newArray.find(o => o.id === obj.id) || obj);
    const result = helpers.updateArray(list, note);
    yield put(actions.setAll(result));
    const activeCategory = yield select(getActiveCategory);
    if (activeCategory) {
      const activeCategoryNotes = yield select(getActiveCategoryNotes);
      const newNotesList = helpers.updateArray(activeCategoryNotes, note);
      yield put(actions.setCategoryItems(newNotesList));
    }
    const keyword = yield select(getKeyword);
    if (keyword) {
      const searchResult = yield select(getSearchResult);
      const newRes = helpers.updateArray(searchResult, note);
      yield put(actions.setSearchResult(keyword, newRes));
    }
  } catch (error) {
    alert(errorMessage);
  } finally {
    yield put(actions.setLoading(false));
  }
}
export function* updateNoteSaga() {
  yield takeEvery(constants.UPDATE_ITEM, updateNote);
}

export function* getAllCategories(action) {
  try {
    yield put(actions.setLoading(true));
    const response = yield call(service.getCategories);
    yield put(actions.setCategories(response.data));
  } catch (error) {
    alert(errorMessage);
  } finally {
    yield put(actions.setLoading(false));
  }
}
export function* getAllCategoriesSaga() {
  yield takeEvery(constants.GET_CATEGORIES, getAllCategories);
}

export function* addCategory(action) {
  const { title } = action.payload;
  try {
    yield put(actions.setLoading(true));
    // send create request to Api
    const response = yield call(service.addCategory, { title });
    // create on redux store
    const result = yield select(getCategories);
    const newList = [...result, ...[response.data]];
    yield put(actions.setCategories(newList));
    yield put(actions.setActiveCategory(response.data));
    const notesList = yield select(getNotes);
    const categoryItems = helpers.filterCategoryItems(notesList, response.data);
    yield put(actions.setCategoryItems(categoryItems));
    yield put(actions.setActiveNote(false));
  } catch (error) {
    alert(errorMessage);
  } finally {
    yield put(actions.setLoading(false));
  }
}
export function* addCategorySaga() {
  yield takeEvery(constants.ADD_CATEGORY, addCategory);
}

export default [
  getAllNotesSaga(),
  addNoteSaga(),
  deleteNoteSaga(),
  updateNoteSaga(),
  getAllCategoriesSaga(),
  addCategorySaga()
];
