/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const LitterForm = ({
  litter,
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
        placeholder="Enter Litter Name or ID"
        value={litter.name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="start_date"
        label="Start Date"
        placeholder="Enter foster start date"
        value={litter.start_date}
        onChange={onChange}
        error={errors.start_date}
      />

      <TextInput
        name="end_date"
        label="End Date"
        placeholder="Enter foster end date"
        value={litter.end_date}
        onChange={onChange}
        error={errors.end_date}
      />

      <h3>Add Kitten</h3>

      <TextInput
        name="kittenName"
        label="Kitten Name"
        placeholder="Enter kitten name"
        value={litter.kittens.kittenName}
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
  litter: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default LitterForm;
