/* eslint-disable no-alert */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as litterActions from "../../redux/actions/litterActions";
import * as kittenActions from "../../redux/actions/kittenActions";
import LitterCard from "./LitterCard";

class LittersPage extends React.Component {
  componentDidMount() {
    const { litters, kittens, actions } = this.props;

    if (kittens.length === 0) {
      actions.loadKittens().catch(error => {
        // eslint-disable-next-line prefer-template
        alert("Loading kittens failed" + error);
      });
    }

    if (litters.length === 0) {
      actions.loadLitters().catch(error => {
        // eslint-disable-next-line prefer-template
        alert("Loading litters failed" + error);
      });
    }
  }

  render() {
    const { litters, kittens } = this.props;
    return (
      <div className="container">
        <h1 className="gray-text text-darken-d">Litters</h1>
        <LitterCard litters={litters} kittens={kittens} />
      </div>
    );
  }
}

LittersPage.propTypes = {
  litters: PropTypes.array.isRequired,
  kittens: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    kittens:
      state.litters.length === 0
        ? []
        : state.kittens.map(kitten => {
            return {
              ...kitten,
              // eslint-disable-next-line prettier/prettier
              litterCount: state.litters.find(l => l.id === kitten.litter_id).count
            };
          }),
    litters: state.litters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadKittens: bindActionCreators(kittenActions.loadKittens, dispatch),
      loadLitters: bindActionCreators(litterActions.loadLitters, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LittersPage);
