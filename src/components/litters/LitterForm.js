/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const LitterForm = ({
  litter,
  kittens,
  onSave,
  onChange,
  handleClick,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <div>
        <h1 className="gray-text text-darken-d display-1">
          {litter.id ? "Edit" : "Add"} Litter{" "}
        </h1>
      </div>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <TextInput
        name="name"
        label="Name / ID"
        placeholder="Enter Litter Name or ID"
        value={litter.name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="start_date"
        label="Start Date"
        placeholder="ex. 2019-05-01"
        value={litter.start_date}
        onChange={onChange}
        error={errors.start_date}
      />

      <TextInput
        name="end_date"
        label="End Date"
        placeholder="ex. 2019-05-30"
        value={litter.end_date}
        onChange={onChange}
        error={errors.end_date}
      />

      <h3>Add Kitten</h3>

      <TextInput
        name="litter.kittens.name"
        label="Kitten Name"
        placeholder="Enter Kitten Name"
        value={litter.kittens.name}
        onChange={onChange}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

LitterForm.propTypes = {
  kittens: PropTypes.array.isRequired,
  litter: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default LitterForm;
