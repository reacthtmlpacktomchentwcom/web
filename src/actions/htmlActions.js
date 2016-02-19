import {
  v4 as uuidv4Factory,
} from "uuid";

import {
  CONNET_BUILD_HTML_ASSETS_START,
  CONNET_BUILD_HTML_ASSETS_SUCCESS,
  CONNET_BUILD_HTML_ASSETS_FAIL,

  CHANGE_HTML_CODE,
  SUBMIT_HTML_CODE,

  RECEIVE_BUILD_HTML_ASSET,
} from "../constants/actions";

import {
  GET_BUILD_HTML_ASSETS,
} from "../constants/endpoints"

export function connectBuildHTMLAssets () {
  return dispatch => {
    const uuid = uuidv4Factory();

    dispatch({
      type: CONNET_BUILD_HTML_ASSETS_START,
      uuid,
    });
    // https://www.igvita.com/2013/06/12/innovating-with-http-2.0-server-push/
    const source = new EventSource(`${ GET_BUILD_HTML_ASSETS }/${
      uuid// Should I get it from state?
    }`);
    //https://developer.mozilla.org/zh-TW/docs/Web/API/EventSource
    source.onopen = event => {
      dispatch({
        type: CONNET_BUILD_HTML_ASSETS_SUCCESS,
      });
    };
    source.onerror = event => {
      console.error(event);
      dispatch({
        type: CONNET_BUILD_HTML_ASSETS_FAIL,
      });
    };
    source.onmessage = event => {
      const { data } = event;
      if (data === `\n`) {
        console.log(`connected`);
        return;
      }
      const { name, content } = JSON.parse(data);

      dispatch({
        type: RECEIVE_BUILD_HTML_ASSET,
        name,
        content,
      });
    };
  };
}

export function changeHTMLCode (code) {
  return {
    type: CHANGE_HTML_CODE,
    code,
  };
}

export function submitHTMLCode () {
  return {
    type: SUBMIT_HTML_CODE,
  };
}
