/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const KittenForm = ({
  kitten,
  allLitters,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{kitten.id ? "Edit" : "Add"} Kitten </h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <TextInput
        name="name"
        label="Name"
        placeholder="Enter Kitten Name"
        value={kitten.name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="dob"
        label="Date of Birth"
        placeholder="ex. 2019-05-01"
        value={kitten.dob}
        onChange={onChange}
        error={errors.dob}
      />

      <SelectInput
        name="litter_id"
        label="Litter"
        value={kitten.litter_id || ""}
        defaultOption="Select Litter"
        options={allLitters}
        onChange={onChange}
        error={errors.litter_id}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

KittenForm.propTypes = {
  allLitters: PropTypes.array.isRequired,
  kitten: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default KittenForm;
