import { LinearProgress, styled } from '@mui/material';

export const StyledContainer = styled('div')`
  position: relative;
  height: calc(100vh - 75px);
  padding: 32px 16px 64px;
`;

export const StyledCurrencyInputs = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100%;
  max-width: 350px;
  margin: 0 auto;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
