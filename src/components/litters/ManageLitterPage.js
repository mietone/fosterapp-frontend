/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadLitters } from "../../redux/actions/litterActions";
import { loadKittens } from "../../redux/actions/kittenActions";
import LitterForm from "./LitterForm";
import { newLitter } from "./newLitter";

function ManageLitterPage({
  litters,
  kittens,
  loadLitters,
  loadKittens,
  ...props
}) {
  const [litter, setLitter] = useState({ ...props.litter });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (kittens.length === 0) {
      loadKittens().catch(error => {
        alert("Loading kittens failed" + error);
      });
    }

    if (litters.length === 0) {
      loadLitters().catch(error => {
        alert("Loading litters failed" + error);
      });
    }
  }, []);

  return <LitterForm litter={litter} errors={errors} />;
}

export function getLitterById(litters, id) {
  return litters.find(litter => litter.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  return {
    litter: newLitter,
    litters: state.litters,
    kittens: state.kittens
  };
}

const mapDispatchToProps = {
  loadLitters,
  loadKittens
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLitterPage);
