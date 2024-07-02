import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxButtonProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
}

export const CheckboxButton = ({
  label,
  checked,
  onChange,
  indeterminate = false,
}: CheckboxButtonProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            '&.Mui-checked': {
              color: 'rgb(var(--color-secondary))',
            },
            '&.MuiCheckbox-indeterminate': {
              color: 'rgb(var(--color-secondary))',
            },
          }}
          checked={checked}
          onChange={onChange}
          indeterminate={indeterminate}
        />
      }
      label={label}
    />
  );
};
