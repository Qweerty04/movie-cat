// components/atoms/input.js
import React from 'react';
import './input.module.scss';

const Input = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="input"
      placeholder="Search movies..."
    />
  );
};

export default Input;

// input.module.scss
/* Styles for the Input component */