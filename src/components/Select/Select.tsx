import { MenuItem } from '@mui/material';
import { StyledSelect } from './styled';

type SelectProps = {
  label: string;
  value: string;
  oppositeValue: string;
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Select = (props: SelectProps) => {
  const { label, value, onChange, oppositeValue, options } = props;

  return (
    <StyledSelect select label={label} value={value} onChange={onChange}>
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          disabled={option.value === oppositeValue}
        >
          {option.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
