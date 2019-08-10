import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import * as litterActions from "../../redux/actions/litterActions";
import LitterForm from "./LitterForm";
import { newLitter } from "./newLitter";
import Spinner from "../common/Spinner";

class ManageLitterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      litter: Object.assign({}, props.litter),
      errors: {},
      saving: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.litter.id !== prevState.litter.id) {
      return { litter: Object.assign({}, nextProps.litter) };
    }
    return null;
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.litter.id != nextProps.litter.id) {
  //     this.setState({ litter: Object.assign({}, nextProps.litter) });
  //   }
  // }

  updateLitterState = event => {
    const field = event.target.name;
    const { litter } = this.state;
    if (field === "litter.kittens.name") {
      this.setState({ kittens: [...this.state.litter.kittens] });
    } else {
      litter[field] = event.target.value;
      return this.setState({ litter });
    }
  };

  saveLitter = event => {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .saveLitter(this.state.litter)
      .then(() => this.redirect())
      .catch(error => {
        toast.error(error);
        this.setState({ saving: false, onSave: error.message });
      });
  };

  redirect() {
    this.setState({ saving: false });
    toast.success("Litter saved.");
    this.props.history.push("/");
  }

  // handleClick = event => {
  //   this.setState(prevState => ({
  //     kittens: [...prevState.kittens, { name: "", dob: "" }]
  //   }));
  // };

  render() {
    console.log("LITTER-ID?", this.state.litter);
    return this.props.litter.length === 0 ? (
      <Spinner />
    ) : (
      <div className="">
        <LitterForm
          litter={this.state.litter}
          kittens={this.state.kittens}
          errors={this.state.errors}
          onChange={this.updateLitterState}
          onSave={this.saveLitter}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageLitterPage.propTypes = {
  litter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export function getLitterById(allLitters, litterId) {
  // debugger;
  return allLitters.find(item => item.id === Number(litterId)) || null;
}

function mapStateToProps(state, ownProps) {
  const litterId = ownProps.match.params.id;
  const allLitters = state.litters;
  const litter =
    litterId && allLitters.length > 0
      ? getLitterById(allLitters, litterId)
      : newLitter;

  // debugger;
  return {
    litter,
    litters: allLitters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(litterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLitterPage);
