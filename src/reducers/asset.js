import {
  CONNET_BUILD_HTML_ASSETS_SUCCESS,

  RECEIVE_BUILD_HTML_ASSET,
} from "../constants/actions";

const INITIAL_STATE = {
};

export default function assetReducer(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
    case CONNET_BUILD_HTML_ASSETS_SUCCESS:
      return {// clear state
      };
    case RECEIVE_BUILD_HTML_ASSET:
      return {
        ...state,
        [action.name]: action.content,
      };
    default:
      return {
        ...state,
      };
  }
}
