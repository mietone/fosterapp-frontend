/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadKittens } from "../../redux/actions/kittenActions";
import { loadLitters } from "../../redux/actions/litterActions";
import KittenForm from "./KittenForm";
import { newKitten } from "./newKitten";

function ManageKittenPage({
  litters,
  kittens,
  loadLitters,
  loadKittens,
  ...props
}) {
  const [kitten, setKitten] = useState({ ...props.kitten });
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

  return <KittenForm kitten={kitten} errors={errors} litters={litters} />;
}

const mapStateToProps = state => {
  return {
    kitten: newKitten,
    kittens: state.kittens,
    litters: state.litters
  };
};

const mapDispatchToProps = {
  loadKittens,
  loadLitters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageKittenPage);
