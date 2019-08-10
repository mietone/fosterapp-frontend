/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import KittenSlot from "../kittens/KittenSlot";

const LitterPage = ({ litter }) => {
  console.log("CHOSEN LITTER IS", litter);
  const kittenCards =
    litter.kittens && litter.kittens.length === 0 ? (
      <p className="p-3 text-muted">There are no kittens in this litter.</p>
    ) : (
      litter.kittens.map(kitten => {
        return (
          <Col className="p-3" sm="4" key={kitten.id}>
            <KittenSlot kitten={kitten} />
          </Col>
        );
      })
    );
  return (
    <div className="">
      <h1 className="text-primary display-1">{litter.name}</h1>
      <ul id="listAcross">
        <li>LITTER ID:{litter.id}</li>
        <li>Start Date:{litter.start_date}</li>
        <li>End Date:{litter.end_date}</li>
      </ul>

      <h1 className="text-muted display-4">Kittens</h1>
      <div>
        <Row>{kittenCards}</Row>
      </div>
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
