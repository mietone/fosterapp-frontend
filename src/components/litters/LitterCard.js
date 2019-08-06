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
import catImage from "../../images/thumb_Miles.png";

const LitterCard = ({ litter }) => (
  <div>
    <Card key={litter.id}>
      <CardImg
        top
        width="100%"
        src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2017/07/187144066.jpg?quality=90&strip=all&zoom=1&resize=644%2C428&ssl=1"
        alt="Card image cap"
      />
      <CardBody>
        <CardHeader tag="h1">
          <Link to={"/litter/" + litter.id + "/page"}>{litter.name}</Link>
        </CardHeader>
        <ListGroup>
          <ListGroupItem>
            <h5>Start Date</h5> {litter.start_date}
          </ListGroupItem>
          <ListGroupItem>
            <h5>End Date</h5> {litter.end_date}
          </ListGroupItem>
          <ListGroupItem>
            {litter.kittenCount !== 0 ? litter.kittenCount : "No"} kitten(s)
          </ListGroupItem>
          <ListGroupItem className="text-center">
            <Link
              className="btn btn-light mx-3 text-info"
              to={"/litter/" + litter.id}
            >
              Edit {litter.name}
            </Link>
            <Link
              className="btn btn-light mx-3 text-info"
              to={"/litter/" + litter.id}
            >
              Edit {litter.name}
            </Link>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  </div>
);

LitterCard.propTypes = {};

export default LitterCard;
