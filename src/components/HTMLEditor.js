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
  default as AceEditor,
} from "./ReactAce";

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

  state = {
    mode: null,
    theme: null,
  };

  componentDidMount() {
    const ace = require(`brace`);
    require(`brace/mode/html`);
    require(`brace/theme/tomorrow_night`);
    this.setState({
      mode: `html`,
      theme: `tomorrow_night`,
    });
  }

  render() {
    const { theme } = this.props;

    return (
      <div>
        <AceEditor
          name="html-ace-editor"
          width={"auto"}
          height={"500px"}
          fontSize={17}
          mode={this.state.mode}
          theme={this.state.theme}
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
