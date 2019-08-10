/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const KittenSlot = ({ kitten }) => (
  <div>
    <Card key={kitten.id}>
      <CardImg
        top
        width="100%"
        src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2017/07/187144066.jpg?quality=90&strip=all&zoom=1&resize=644%2C428&ssl=1"
        alt="Card image cap"
      />
      <CardBody>
        <CardHeader tag="h1">
          <Link to={"/kitten/" + kitten.id + "/page"}>{kitten.name}</Link>
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <h5>Date of Birth</h5> {kitten.dob}
          </ListGroupItem>
          <ListGroupItem>
            <h5>gender</h5> {kitten.gender ? "boy" : "girl"}
          </ListGroupItem>
          <ListGroupItem className="text-center">
            <Link
              className="btn btn-light text-info"
              to={"/kitten/" + kitten.id}
            >
              Edit {kitten.name}
            </Link>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  </div>
);

KittenSlot.propTypes = {
  litters: PropTypes.array.isRequired
};

export default KittenSlot;
