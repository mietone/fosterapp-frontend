/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const AddKittenField = props => {
  return props.kittens.map((val, idx) => {
    const kittenId = `kitten=${idx}`;
    const dobId = `dob-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={kittenId}>{`Kitten #${idx + 1}`}</label>

        <TextInput
          name={kittenId}
          label="Name"
          data-id={idx}
          id={kittenId}
          placeholder="Enter Kitten Name"
          value={props.kittens[idx].name}
          className={name}
          error={errors.name}
        />

        <TextInput
          name={dobId}
          label="Date of Birth"
          data-id={idx}
          id={dobId}
          placeholder="ex. 2019-05-01"
          value={props.kittens[idx].dob}
          className={dob}
          error={errors.dob}
        />
      </div>
    );
  });
};

AddKittenField.propTypes = {
  allLitters: PropTypes.array.isRequired,
  kitten: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default AddKittenField;
