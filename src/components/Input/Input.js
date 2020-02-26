import React from 'react';

import PropTypes from 'prop-types';

// core
import TextField from '@material-ui/core/TextField';

const Input = ({
  label, input, ...rest
}) => {
  const { value, onChange } = input;
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  // string
  label: PropTypes.string.isRequired,
  // object
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Input;
