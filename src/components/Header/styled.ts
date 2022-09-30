import { AppBar, Skeleton } from '@mui/material';
import { styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '75px',
  backgroundColor: theme.palette.background.default,
  backgroundImage: 'none',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '90px',
  width: '100%',
}));

export const StyledCurrency = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledCurrencyName = styled('span')(() => ({
  fontWeight: '700',
}));

export const StyledSkeleton = styled(Skeleton)(() => ({
  transform: 'none',
  height: '20px',
  width: '40px',
}));
