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
  default as FormSubmitter,
} from "./FormSubmitter";

import {
  default as theme,
} from "./Navbar.css";

export class Navbar extends Component {

  static propTypes = {
    theme: PropTypes.shape({
      Navbar: PropTypes.string.isRequired,
      FormSubmitter: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    theme: `locals` in theme ? theme.locals : theme, // Temp hack for injecting css-modules object in server side
  };

  render() {
    const { theme } = this.props;

    return (
      <div className={theme.Navbar}>
        <div className={theme.FormSubmitter}>
          <FormSubmitter />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
