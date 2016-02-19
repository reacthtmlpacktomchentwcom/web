import {
  combineReducers,
} from "redux";

import {
  default as html,
} from "./html"

import {
  default as asset,
} from "./asset";

export default combineReducers({
  html,
  asset,
});
