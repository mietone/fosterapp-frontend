/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LitterCard = ({ litters }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>kitten(s)</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {litters.map(litter => {
        return (
          <tr key={litter.id}>
            <td>
              <Link to={"/litter/" + litter.id}>{litter.name}</Link>
            </td>
            <td>{litter.start_date}</td>
            <td>{litter.end_date}</td>
            <td>
              {litter.kittenCount !== 0 ? litter.kittenCount : "No kittens"}
            </td>
            <td>
              <a
                className="btn btn-light"
                href={"http://localhost:3000/litter/" + litter.id}
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

LitterCard.propTypes = {
  litters: PropTypes.array.isRequired
};

export default LitterCard;
