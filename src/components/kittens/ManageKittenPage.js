/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as kittenActions from "../../redux/actions/kittenActions";
import * as litterActions from "../../redux/actions/litterActions";
import KittenForm from "./KittenForm";
import { newKitten } from "./newKitten";

class ManageKittenPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      kitten: Object.assign({}, props.kitten),
      // litters: Object.assign({}, props.litters),
      errors: {}
    };
  }

  updateKittenState = event => {
    const field = event.target.name;
    const { kitten } = this.state;
    kitten[field] = event.target.value;
    return this.setState({ kitten });
  };

  saveKitten = event => {
    event.preventDefault();
    this.props.actions.saveKitten(this.state.kitten).then(() => {
      this.props.history.push("/kittens");
    });
  };

  render() {
    console.log("InKittenForm", this.props.litters);
    return (
      <div className="container">
        <KittenForm
          kitten={this.state.kitten}
          allLitters={this.props.litters}
          onChange={this.updateKittenState}
          onSave={this.saveKitten}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageKittenPage.propTypes = {
  litters: PropTypes.array.isRequired,
  kitten: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export function getKittenById(kittens, id) {
  return kittens.find(kitten => kitten.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  console.log("STATE IN MANAGEKITTEN", state.litters);
  const kittenId = ownProps.match.params.id;

  const kitten =
    kittenId && state.kittens.length > 0
      ? getKittenById(state.kittens, kittenId)
      : newKitten;

  const littersFormattedForDropdown = state.litters.map(litter => {
    return {
      value: litter.id,
      text: litter.name
    };
  });
  console.log("littersFormattedForDropdown", littersFormattedForDropdown);
  return {
    kitten: newKitten,
    litters: littersFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(kittenActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageKittenPage);
