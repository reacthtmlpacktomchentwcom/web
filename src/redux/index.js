import {
  default as thunk,
} from "redux-thunk";

import {
  applyMiddleware,
  createStore,
} from "redux";

import {
  default as reducer,
} from "../reducers";

export function configureStore(initialState) {
  return createStore(
    reducer,
    applyMiddleware(
      thunk,
    ),
  );
}
