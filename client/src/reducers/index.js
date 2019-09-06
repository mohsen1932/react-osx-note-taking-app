import * as constants from "../constants";

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
function Reducer(state = initial, action) {
  switch (action.type) {
    case constants.LOADING:
      return { ...state, ...action.payload };
    case constants.SET:
      return { ...state, ...action.payload };
    case constants.SET_CATEGORIES:
      return { ...state, ...action.payload };
    case constants.SET_CATEGORY_ITEMS:
      return { ...state, ...action.payload };
    case constants.SET_SEARCH_RESULTS:
      return { ...state, ...action.payload };
    case constants.SET_ACTIVE_NOTE:
      return { ...state, ...action.payload };
    case constants.SET_ACTIVE_CATEGORY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default Reducer;
