/* eslint-disable no-alert */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as kittenActions from "../../redux/actions/kittenActions";
import KittenCard from "./KittenCard";

class KittensPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadKittens().catch(error => {
      // eslint-disable-next-line prefer-template
      alert("Loading kittens failed" + error);
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="gray-text text-darken-d">Kittens</h3>
        <KittenCard kittens={this.props.kittens} />
      </div>
    );
  }
}

KittensPage.propTypes = {
  kittens: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    kittens: state.kittens
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(kittenActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KittensPage);
