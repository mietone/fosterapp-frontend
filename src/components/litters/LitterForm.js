/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const LitterForm = ({
  litter,
  kittens,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{litter.id ? "Edit" : "Add"} Litter </h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <TextInput
        name="name"
        label="Name / ID"
        value={litter.name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="start_Date"
        label="Start Date"
        value={litter.start_date}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="end_Date"
        label="End Date"
        value={litter.end_date}
        onChange={onChange}
        error={errors.name}
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
  saving: PropTypes.bool
};

export default LitterForm;
