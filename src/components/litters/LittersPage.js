/* eslint-disable no-alert */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as litterActions from "../../redux/actions/litterActions";
import LitterCard from "./LitterCard";

class LittersPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadLitters().catch(error => {
      // eslint-disable-next-line prefer-template
      alert("Loading litters failed" + error);
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="gray-text text-darken-d">Litters</h3>
        <LitterCard litters={this.props.litters} />
      </div>
    );
  }
}

LittersPage.propTypes = {
  litters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    litters: state.litters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(litterActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LittersPage);
