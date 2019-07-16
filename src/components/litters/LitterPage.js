import React from "react";
import { Link } from "react-router-dom";

const LitterPage = () => (
  <div className="jumbotron">
    <h1>Litters</h1>
    <p>List of Litters.</p>
    <Link to="kitten" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default LitterPage;
