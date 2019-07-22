/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const KittenCard = ({ kittens }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>D.O.B</th>
        <th>Litter Name</th>
      </tr>
    </thead>
    <tbody>
      {kittens.map(kitten => {
        return (
          <tr key={kitten.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://localhost:3001/api/v1/kitten/" + kitten.id}
              >
                Edit
              </a>
            </td>
            <td>
              <Link to={"/kitten/" + kitten.id}>{kitten.name}</Link>
            </td>
            <td>{kitten.dob}</td>
            <td>{kitten.litterName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

KittenCard.propTypes = {
  kittens: PropTypes.array.isRequired
};

export default KittenCard;
