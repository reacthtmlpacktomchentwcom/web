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
  default as BraceEditor,
} from "./BraceEditor";

import {
  changeHTMLCode,
} from "../actions/htmlActions";

export class HTMLEditor extends Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    onChangeCode: PropTypes.func.isRequired,
    theme: PropTypes.shape({
    }),
  };

  render() {
    return (
      <div>
        <BraceEditor
          name="html-ace-editor"
          width={"auto"}
          height={"500px"}
          fontSize={17}
          mode="html"
          theme="tomorrow_night"
          showGutter={false}
          value={this.props.code}
          highlightActiveLine={false}
          editorProps={{
            $blockScrolling: Infinity
          }}
          onChange={this.props.onChangeCode}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    code: state.html.code,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    onChangeCode: changeHTMLCode,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HTMLEditor);
