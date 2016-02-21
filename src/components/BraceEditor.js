import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as AceEditor,
} from "./ReactAce";

export default class BraceEditor extends Component {

  static propTypes = {
    mode: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  };

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    require(`brace`);
    require(`brace/mode/${ this.props.mode }`);
    require(`brace/theme/${ this.props.theme }`);
  }

  render() {
    return (
      <div>
        <AceEditor
          {...this.props}
        />
      </div>
    );
  }
}
