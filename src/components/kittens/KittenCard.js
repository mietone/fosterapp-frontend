/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const KittenCard = ({ kittens }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>D.O.B</th>
        <th>Litter Name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {kittens.map(kitten => {
        return (
          <tr key={kitten.id}>
            <td>
              <Link to={"/kitten/" + kitten.id}>{kitten.name}</Link>
            </td>
            <td>{kitten.dob}</td>
            <td>{kitten.litterName}</td>
            <td>
              <a
                className="btn btn-light"
                href={"http://localhost:3001/api/v1/kitten/" + kitten.id}
              >
                Edit
              </a>
            </td>
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
