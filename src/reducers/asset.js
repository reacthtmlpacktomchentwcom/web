import {
  extname as extractExtname,
} from "path";

import {
  CONNET_BUILD_HTML_ASSETS_SUCCESS,

  RECEIVE_BUILD_HTML_ASSET,

  SUBMIT_HTML_CODE,
} from "../constants/actions";

const INITIAL_STATE = {
  list: [],
};

function mapNameToMode(name) {
  const extname = extractExtname(name);
  return {
    ".html": `html`,
    ".js": `javascript`,
    ".css": `css`,
  }[extname];
}

export default function assetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONNET_BUILD_HTML_ASSETS_SUCCESS:
      return INITIAL_STATE;
    case RECEIVE_BUILD_HTML_ASSET:
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: action.name,
            mode: mapNameToMode(action.name),
            content: action.content,
          },
        ],
      };
    case SUBMIT_HTML_CODE:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
}
