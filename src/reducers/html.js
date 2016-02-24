import {
  CONNET_BUILD_HTML_ASSETS_START,
  CONNET_BUILD_HTML_ASSETS_SUCCESS,
  CONNET_BUILD_HTML_ASSETS_FAIL,

  CHANGE_HTML_CODE,
} from "../constants/actions";

const INITIAL_STATE = {
  code: (
`// Copy the contents and paste in here. Click "Submit" and wait ~20s:
// https://github.com/tomchentw/reacthtmlpack/blob/v2.1.6/examples/AlertAutoDismissable/index.html
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
