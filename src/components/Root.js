import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as Helmet,
} from "react-helmet";

import {
  bindActionCreators,
} from "redux";

import {
  connect,
} from "react-redux";

import {
  default as HTMLEditor,
} from "./HTMLEditor";

import {
  default as Navbar,
} from "./Navbar";

import {
  BUILD_HTML_IFRAME_NAME,
} from "../constants/identifiers";

import{
  connectBuildHTMLAssets,
} from "../actions/htmlActions";

import {
  default as theme,
} from "./Root.css";

export class Root extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onComponentMount: PropTypes.func.isRequired,
    theme: PropTypes.shape({
      Root: PropTypes.string.isRequired,
      row: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      buildFrame: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    theme: `locals` in theme ? theme.locals : theme, // Temp hack for injecting css-modules object in server side
  };

  componentDidMount() {
    this.props.onComponentMount();
  }

  handleClick() {
    console.log(`Click`);
  }

  render() {
    const { theme } = this.props;

    return (
      <div className={theme.Root}>
        <Helmet
          title="Home"
        />
        <Navbar />
        <div className={theme.row}>
          <div className={theme.item}>
            <HTMLEditor />
          </div>
          <div className={theme.item}>
            <iframe
              name={BUILD_HTML_IFRAME_NAME}
              className={theme.buildFrame}
            />
          </div>
        </div>
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
    onComponentMount: connectBuildHTMLAssets,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
