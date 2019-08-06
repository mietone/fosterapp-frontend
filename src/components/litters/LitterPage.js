import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadKittens } from "../../redux/actions/kittenActions";

class LitterPage extends React.Component {
  handleClick = e => {
    alert("I was clicked");
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-primary display-1">{this.props.litter.name}</h1>
        <p>LITTER ID: {this.props.litterId}        </p>

        <button onClick={this.handleClick} className="btn btn-primary btn-lg">
          Load Kittens
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const litterId = ownProps.match.params.id;
  console.log(state.litters);
  console.log("ID is", litterId);
  return {
    litter: state.litters.find(litter => litter.id === Number(litterId))
  };
}

export default connect(mapStateToProps)(LitterPage);
