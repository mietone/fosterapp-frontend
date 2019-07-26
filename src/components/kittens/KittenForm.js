/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const KittenForm = ({
  kitten,
  litters,
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
        name="litterId"
        label="Litter"
        value={kitten.litterId || ""}
        defaultOption="Select Litter"
        options={litters.map(litter => ({
          value: litter.id,
          text: litter.name
        }))}
        onChange={onChange}
        error={errors.litter}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default KittenForm;
