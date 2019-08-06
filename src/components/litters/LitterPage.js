/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col } from "reactstrap";

const LitterPage = ({ litter }) => {
  console.log("CHOSEN LITTER IS", litter);
  const kittenCards = litter.kittens.map(kitten => {
    return (
      <Col className="p-3" sm="4" key={kitten.id}>
        {kitten.name}
      </Col>
    );
  });
  return (
    <div className="jumbotron">
      <h1 className="text-primary display-1">{litter.name}</h1>
      <p>LITTER ID:{litter.id}</p>

      <h3>Kittens</h3>
      <div>
        <Row>{kittenCards}</Row>
      </div>
      <p>There are no kittens in this litter</p>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const litterId = ownProps.match.params.id;
  console.log(state.litters);
  console.log("ID is", litterId);
  return {
    litter: state.litters.find(litter => litter.id === Number(litterId))
  };
}

export default connect(mapStateToProps)(LitterPage);
