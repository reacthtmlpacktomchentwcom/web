import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as BraceEditor,
} from "./BraceEditor";

export class AssetEditor extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    theme: PropTypes.shape({
    }),
  };

  render() {
    return (
      <div>
        <BraceEditor
          name={`${ this.props.name }-ace-editor`}
          width={"auto"}
          height={"500px"}
          fontSize={17}
          mode={this.props.mode}
          theme="tomorrow_night"
          showGutter={false}
          value={this.props.content}
          highlightActiveLine={false}
          editorProps={{
            $blockScrolling: Infinity
          }}
        />
      </div>
    );
  }
}
