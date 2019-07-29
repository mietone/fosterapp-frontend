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

      <button onClick={handleClick}>Add new kitten</button>

      {kittens.map((val, idx) => {
        const kittenId = `kitten-${idx}`;
        const dobId = `dob-${idx}`;
        return (
          <div key={idx} className="form-group">
            <label hmtlFor={kittenId}>{`Kitten #${idx + 1}`}</label>
            <div className="field">
              <input
                type="text"
                name={kittenId}
                placeholder="Enter kitten name"
                data-id={idx}
                id={kittenId}
                className="name"
              />
            </div>

            <label hmtlFor={dobId}>Date of Birth</label>
            <input
              type="text"
              name={dobId}
              placeholder="ex. 2019-05-01"
              data-id={idx}
              id={dobId}
              className="dob"
            />
          </div>
        );
      })}

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
