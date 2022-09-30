import { TextField, styled } from '@mui/material';

export const StyledInput = styled(TextField)`
  flex: 1 1 65%;
  position: relative;

  & .MuiFormHelperText-root.Mui-error {
    position: absolute;
    top: 55px;
    left: 0;
  }
`;
