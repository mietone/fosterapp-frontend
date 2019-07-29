/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import catImage from "../../images/thumb_Miles.png";

const LitterCard = ({ litter }) => (
  <div>
    <Card key={litter.id}>
      <CardImg top width="100%" src={catImage} alt="Card image cap" />
      <CardBody>
        <CardHeader tag="h1">
          <Link to={"/litter/" + litter.id}>{litter.name}</Link>
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
          <ListGroupItem>
            <a
              className="btn btn-light"
              href={"http://localhost:3000/litter/" + litter.id}
            >
              Edit
            </a>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  </div>
);

LitterCard.propTypes = {
  litters: PropTypes.array.isRequired
};

export default LitterCard;
