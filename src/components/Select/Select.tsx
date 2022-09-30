import { MenuItem } from '@mui/material';
import currencies from 'data/currencies';
import { StyledSelect } from './styled';

type SelectProps = {
  label: string;
  value: string;
  oppositeValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Select = (props: SelectProps) => {
  const { label, value, onChange, oppositeValue } = props;

  return (
    <StyledSelect select label={label} value={value} onChange={onChange}>
      {currencies.map((option) => (
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
