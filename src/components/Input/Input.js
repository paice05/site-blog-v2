import React from 'react';

import PropTypes from 'prop-types';

// core
import TextField from '@material-ui/core/TextField';

const Input = ({ label, type, input }) => {
  const { value, onChange } = input;
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  // string
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // object
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Input;
