/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadKittens } from "../../redux/actions/kittenActions";
import { loadLitters, saveLitter } from "../../redux/actions/litterActions";
import LitterForm from "./LitterForm";
import { newLitter } from "./newLitter";

function ManageLitterPage({
  litters,
  kittens,
  loadKittens,
  loadLitters,
  ...props
}) {
  const [litter, setLitter] = useState({ ...props.litter });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (kittens.length === 0) {
      loadKittens().catch(error => {
        // eslint-disable-next-line prefer-template
        alert("Loading kittens failed" + error);
      });
    }

    if (litters.length === 0) {
      loadLitters().catch(error => {
        // eslint-disable-next-line prefer-template
        alert("Loading litters failed" + error);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setLitter(prevLitter => ({
      ...prevLitter,
      [name]: name === "litterId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveLitter(litter);
  }

  return (
    <div className="container">
      <LitterForm
        litter={litter}
        errors={errors}
        kittens={kittens}
        onChange={handleChange}
        onSave={handleSave}
      />
    </div>
  );
}

ManageLitterPage.propTypes = {
  litter: PropTypes.object.isRequired,
  litters: PropTypes.array.isRequired,
  kittens: PropTypes.array.isRequired,
  loadLitters: PropTypes.func.isRequired,
  loadKittens: PropTypes.func.isRequired,
  saveLitter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    litter: newLitter,
    kittens: state.kittens,
    litters: state.litters
  };
};

const mapDispatchToProps = {
  loadKittens,
  loadLitters,
  saveLitter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLitterPage);
