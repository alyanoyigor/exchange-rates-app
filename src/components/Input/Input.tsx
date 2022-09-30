import { StyledInput } from './styled';

type InputProps = {
  value: string;
  type: 'text' | 'number';
  error: string | null;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const { value, onChange, label, error, type } = props;

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      label={label}
      variant="outlined"
      autoComplete="off"
      type={type}
      error={Boolean(error)}
      helperText={error}
    />
  );
};
