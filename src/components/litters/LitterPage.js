import React from "react";
import { Link } from "react-router-dom";

const LitterPage = () => (
  <div className="jumbotron">
    <h1>Litter Name</h1>

    <Link to="kitten/:id" className="btn btn-primary btn-lg">
      Learn more
    </Link>

  </div>
);

export default LitterPage;
