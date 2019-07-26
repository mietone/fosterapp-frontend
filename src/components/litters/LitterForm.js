/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

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

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default LitterForm;
