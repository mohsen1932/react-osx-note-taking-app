import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import Reducer from "./reducers";
import sagas from "./sagas";

const rootSaga = function*() {
  yield all([
    ...sagas
    // ...PersonsList.sagas,
    // ...Add.sagas
  ]);
};
const sagaMiddleware = createSagaMiddleware();
const rootReducer = (state, action) => {
  return combineReducers({
    // routing: routerReducer,
    // personsList: PersonsList.reducers,
    app: Reducer
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export { store };
