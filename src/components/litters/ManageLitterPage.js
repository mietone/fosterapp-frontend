import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as litterActions from "../../redux/actions/litterActions";
import LitterForm from "./LitterForm";

class ManageLitterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      litter: Object.assign({}, props.litter),
      errors: {}
    };
  }

  updateLitterState = event => {
    const field = event.target.name;
    const { litter } = this.state;
    litter[field] = event.target.value;
    return this.setState({ litter });
  };

  saveLitter = event => {
    event.preventDefault();
    this.props.actions.saveLitter(this.state.litter).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container">
        <LitterForm
          onChange={this.updateLitterState}
          onSave={this.saveLitter}
          litter={this.state.litter}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageLitterPage.propTypes = {
  litter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getLitterById(litters, id) {
  const litter = litters.filter(litter => litter.id === id);
  if (litter) return litter[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const litter = {
    id: null,
    name: "",
    start_date: "",
    end_date: "",
    kittens: [
      {
        id: null,
        name: "",
        dob: "",
        image: "",
        gender: true,
        litter_id: "",
        user_id: "",
        errors: {},
        _destroy: false
      }
    ]
  };

  return {
    litter
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
