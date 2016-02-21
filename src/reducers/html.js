import {
  CONNET_BUILD_HTML_ASSETS_START,
  CONNET_BUILD_HTML_ASSETS_SUCCESS,
  CONNET_BUILD_HTML_ASSETS_FAIL,

  CHANGE_HTML_CODE,
} from "../constants/actions";

const INITIAL_STATE = {
  code: (
`// Try pasting, click Submit and wait ~20s:
// https://gist.github.com/tomchentw/44d614c371260dd1d0fd
`),
  uuid: null,
  isSubmitBtnDisabled: true,
};

export default function htmlReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONNET_BUILD_HTML_ASSETS_START:
      return {
        ...state,
        uuid: action.uuid,
      };
    case CONNET_BUILD_HTML_ASSETS_SUCCESS:
      return {
        ...state,
        isSubmitBtnDisabled: false,
      };
    case CHANGE_HTML_CODE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return {
        ...state,
      };
  }
}
