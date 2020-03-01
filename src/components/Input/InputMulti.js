import React from 'react';

import TextField from '@material-ui/core/TextField';

const InputMulti = ({ label, input }) => {
  const { value, onChange } = input;
  return (
    <TextField
      label={label}
      fullWidth
      multiline
      value={value}
      onChange={onChange}
    />
  );
};

export default InputMulti;
