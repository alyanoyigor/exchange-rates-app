import { Typography } from '@mui/material';

import { getLatestCurrencies } from 'api/converter';
import { ErrorNotification } from 'components/ErrorNotification';
import useAxios from 'hooks/useAxios';
import { CurrencyValues } from 'types';
import { roundNumber } from 'utils/roundNumber';

import {
  StyledContainer,
  StyledAppBar,
  StyledCurrency,
  StyledCurrencyName,
  StyledSkeleton,
} from './styled';

export const Header = () => {
  const { data, error, loading, open, setOpen } = useAxios(() =>
    getLatestCurrencies({
      base: CurrencyValues.UAH,
      symbols: [CurrencyValues.USD, CurrencyValues.EUR],
    })
  );

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const currencyUSD = data
    ? roundNumber(1 / data.rates[CurrencyValues.USD], 2)
    : null;
  const currencyEUR = data
    ? roundNumber(1 / data.rates[CurrencyValues.EUR], 2)
    : null;

  return (
    <>
      <StyledAppBar position="static">
        <StyledContainer>
          <StyledCurrency>
            <StyledCurrencyName>EUR</StyledCurrencyName>
            {currencyEUR && !loading && !error && (
              <Typography>{currencyEUR}</Typography>
            )}
            {loading && !error && <StyledSkeleton />}
            {error && !loading && <Typography>Error</Typography>}
          </StyledCurrency>
          <StyledCurrency>
            <StyledCurrencyName>USD</StyledCurrencyName>
            {currencyUSD && !loading && !error && (
              <Typography>{currencyUSD}</Typography>
            )}
            {loading && !error && <StyledSkeleton />}
            {error && !loading && <Typography>Error</Typography>}
          </StyledCurrency>
        </StyledContainer>
      </StyledAppBar>
      <ErrorNotification open={open} onClose={handleClose}>
        {error}
      </ErrorNotification>
    </>
  );
};
