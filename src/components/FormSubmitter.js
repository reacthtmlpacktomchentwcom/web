import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  bindActionCreators,
} from "redux";

import {
  connect,
} from "react-redux";

import {
  submitHTMLCode,
} from "../actions/htmlActions";

import {
  BUILD_HTML_IFRAME_NAME,
} from "../constants/identifiers";

import {
  POST_BUILD_HTML,
} from "../constants/endpoints";

import {
  default as theme,
} from "./FormSubmitter.css";

export class FormSubmitter extends Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    isSubmitBtnDisabled: PropTypes.bool.isRequired,
    onSubmitCode: PropTypes.func.isRequired,
    theme: PropTypes.shape({
      FormSubmitter: PropTypes.string.isRequired,
      form: PropTypes.string.isRequired,
      submitBtn: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    theme: `locals` in theme ? theme.locals : theme, // Temp hack for injecting css-modules object in server side
  };

  render() {
    const { theme } = this.props;

    return (
      <div className={theme.FormSubmitter}>
        <form
          className={theme.form}
          action={POST_BUILD_HTML}
          method="POST"
          target={BUILD_HTML_IFRAME_NAME}
        >
          <input type="hidden" name="source" value={this.props.code} />
          <input type="hidden" name="uuid" value={this.props.uuid} />
          <button
            className={theme.submitBtn}
            disabled={this.props.isSubmitBtnDisabled}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    code: state.html.code,
    uuid: state.html.uuid,
    isSubmitBtnDisabled: state.html.isSubmitBtnDisabled,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    onSubmitCode: submitHTMLCode,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSubmitter);
