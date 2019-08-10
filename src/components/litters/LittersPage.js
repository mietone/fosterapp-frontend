/* eslint-disable no-alert */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import { toast } from "react-toastify";
import * as litterActions from "../../redux/actions/litterActions";
import * as kittenActions from "../../redux/actions/kittenActions";
import LitterCard from "./LitterCard";
import Spinner from "../common/Spinner";

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

  handleDeleteLitter = litter => {
    toast.success("litter deleted");
    const { actions } = this.props;
    actions.deleteLitter(litter).catch(error => {
      // eslint-disable-next-line prefer-template
      toast.error("Delete failed. " + error.message, { autoClose: false });
    });
  };

  render() {
    const { litters } = this.props;
    const litterCards = litters.map(litter => {
      return (
        <Col className="p-3" sm="4" key={litter.id}>
          <LitterCard onDeleteClick={this.handleDeleteLitter} litter={litter} />
        </Col>
      );
    });
    return (
      <div className="">
        <h1 className="gray-text display-1">Litters</h1>
        <div>{this.props.loading ? <Spinner /> : <Row>{litterCards}</Row>}</div>
      </div>
    );
  }
}

LittersPage.propTypes = {
  litters: PropTypes.array.isRequired,
  kittens: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    litters:
      state.kittens.length === 0
        ? []
        : state.litters.map(litter => {
            return {
              ...litter,
              // eslint-disable-next-line prettier/prettier
              kittenCount: state.kittens.filter(k => k.litter_id === litter.id).length
            };
          }),
    kittens: state.kittens,
    loading: state.apiCallsInProgress > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadKittens: bindActionCreators(kittenActions.loadKittens, dispatch),
      loadLitters: bindActionCreators(litterActions.loadLitters, dispatch),
      deleteLitter: bindActionCreators(litterActions.deleteLitter, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LittersPage);
