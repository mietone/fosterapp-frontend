import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import * as litterActions from '../../redux/actions/litterActions'

class LitterForm extends React.Component {
  state = {
    litter: {
      name: ""
    }
  };

  handleChange = event => {
    const litter = { ...this.state.litter, name: event.target.value };
    this.setState({ litter });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createLitter(this.state.litter);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-d">Add Litter</h5>
          <div className="">
            <label htmlFor="name">Litter Name / Litter ID</label>
            <input
              type="text"
              id="name" 
              onChange={this.handleChange}
              value={this.state.litter.name}
            />
          </div>

          <div>
            <input type="submit" value="Save" />
          </div>

          {this.props.litters.map(litter => (
            <div key={litter.name}>{litter.name}</div>
          ))}
        </form>
      </div>
    );
  }
}

LitterForm.propTypes = {
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
)(LitterForm);
