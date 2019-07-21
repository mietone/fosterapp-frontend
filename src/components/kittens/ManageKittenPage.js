/* eslint-disable no-alert */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadKittens } from "../../redux/actions/kittenActions";
import { loadLitters } from "../../redux/actions/litterActions";

class ManageKittenPage extends React.Component {
  componentDidMount() {
    const { litters, kittens, loadKittens, loadLitters } = this.props;

    if (kittens.length === 0) {
      loadKittens().catch(error => {
        // eslint-disable-next-line prefer-template
        alert("Loading kittens failed" + error);
      });
    }

    if (litters.length === 0) {
      loadLitters().catch(error => {
        // eslint-disable-next-line prefer-template
        alert("Loading litters failed" + error);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="gray-text text-darken-d">Manage Kitten</h3>
      </div>
    );
  }
}

ManageKittenPage.propTypes = {
  litters: PropTypes.array.isRequired,
  kittens: PropTypes.array.isRequired,
  loadLitters: PropTypes.func.isRequired,
  loadKittens: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    kittens: state.kittens,
    litters: state.litters
  };
};

const mapDispatchToProps = {
  loadKittens,
  loadLitters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageKittenPage);
