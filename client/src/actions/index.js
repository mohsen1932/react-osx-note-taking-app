import * as constants from "../constants";

export const setLoading = loading => ({
  type: constants.LOADING,
  payload: {
    loading
  }
});
export const getAll = () => ({
  type: constants.GET,
  payload: {}
});
export const setAll = notes => ({
  type: constants.SET,
  payload: {
    notes
  }
});
export const addNote = (body, categoryId, date) => ({
  type: constants.ADD_ITEM,
  payload: {
    body,
    categoryId,
    date
  }
});
export const deleteNote = id => ({
  type: constants.DELETE_ITEM,
  payload: {
    id
  }
});
export const updateNote = note => ({
  type: constants.UPDATE_ITEM,
  payload: {
    note
  }
});
export const getCategories = () => ({
  type: constants.GET_CATEGORIES,
  payload: {}
});
export const setCategories = categories => ({
  type: constants.SET_CATEGORIES,
  payload: {
    categories
  }
});
export const setCategoryItems = activeCategoryNotes => ({
  type: constants.SET_CATEGORY_ITEMS,
  payload: {
    activeCategoryNotes
  }
});
export const addCategory = title => ({
  type: constants.ADD_CATEGORY,
  payload: {
    title
  }
});
export const setSearchResult = (keyword, searchResult) => ({
  type: constants.SET_SEARCH_RESULTS,
  payload: {
    keyword,
    searchResult
  }
});
export const setActiveCategory = activeCategory => ({
  type: constants.SET_ACTIVE_CATEGORY,
  payload: {
    activeCategory
  }
});
export const setActiveNote = activeNote => ({
  type: constants.SET_ACTIVE_NOTE,
  payload: {
    activeNote
  }
});
