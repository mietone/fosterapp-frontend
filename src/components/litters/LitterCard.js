/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LitterCard = ({ litters }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody>
      {litters.map(litter => {
        return (
          <tr key={litter.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://localhost:3001/api/v1/litters/" + litter.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/litter/" + litter.slug}>{litter.name}</Link>
            </td>
            <td>{litter.start_date}</td>
            <td>{litter.end_date}</td>
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
