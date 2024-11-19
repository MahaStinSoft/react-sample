import React from 'react';

const LabeledInput = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        required
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LabeledInput;
