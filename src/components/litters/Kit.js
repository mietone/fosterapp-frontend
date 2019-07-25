/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Kit = ({ litter }) => (
  <div>
    <p>{litter.name}</p>
  </div>
);

export default Kit;
