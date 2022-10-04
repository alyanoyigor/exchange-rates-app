import React, { useState } from 'react';
import {
  calculateCurrency,
  calculateCurrencyWithDelay,
} from 'utils/calculateCurrency';
import currencies from 'data/currencies';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { ErrorNotification } from 'components/ErrorNotification';

import {
  StyledContainer,
  StyledCurrencyInputs,
  StyledForm,
  StyledLinearProgress,
} from './styled';

export const Content = () => {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [firstNumberError, setFirstNumberError] = useState<string | null>(null);

  const [secondNumber, setSecondNumber] = useState<string>('');
  const [secondNumberError, setSecondNumberError] = useState<string | null>(
    null
  );

  const [firstCurrency, setFirstCurrency] = useState<string>(
    currencies[0].value
  );
  const [secondCurrency, setSecondCurrency] = useState<string>(
    currencies[1].value
  );

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChangeFirstNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    calculateCurrencyWithDelay({
      from: firstCurrency,
      to: secondCurrency,
      amount: value,
      setError: setFirstNumberError,
      setNewNumber: setSecondNumber,
      setTimeoutId,
      timeoutId,
      wait: 500,
      setLoading,
      setErrorNotification: setError,
      setOpen,
    });

    setFirstNumber(value);
  };

  const handleChangeSecondNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    calculateCurrencyWithDelay({
      from: secondCurrency,
      to: firstCurrency,
      amount: value,
      setError: setSecondNumberError,
      setNewNumber: setFirstNumber,
      setTimeoutId,
      timeoutId,
      wait: 500,
      setLoading,
      setErrorNotification: setError,
      setOpen,
    });

    setSecondNumber(value);
  };

  const handleChangeFirstCurrency = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    calculateCurrency({
      from: value,
      to: secondCurrency,
      amount: firstNumber,
      setNewNumber: setSecondNumber,
      setLoading,
      setErrorNotification: setError,
      setOpen,
      setError: setFirstNumberError,
    });

    setFirstCurrency(value);
  };

  const handleChangeSecondCurrency = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    calculateCurrency({
      from: value,
      to: firstCurrency,
      amount: secondNumber,
      setNewNumber: setFirstNumber,
      setLoading,
      setErrorNotification: setError,
      setOpen,
      setError: setSecondNumberError,
    });

    setSecondCurrency(value);
  };

  return (
    <>
      <StyledContainer>
        {loading && <StyledLinearProgress />}
        <StyledForm>
          <StyledCurrencyInputs>
            <Input
              value={firstNumber}
              onChange={handleChangeFirstNumber}
              label="First Number"
              type="number"
              error={firstNumberError}
            />
            <Select
              options={currencies}
              label="First Currency"
              value={firstCurrency}
              onChange={handleChangeFirstCurrency}
              oppositeValue={secondCurrency}
            />
          </StyledCurrencyInputs>
          <StyledCurrencyInputs>
            <Input
              value={secondNumber}
              onChange={handleChangeSecondNumber}
              label="Second Number"
              type="number"
              error={secondNumberError}
            />
            <Select
              options={currencies}
              label="Second Currency"
              value={secondCurrency}
              onChange={handleChangeSecondCurrency}
              oppositeValue={firstCurrency}
            />
          </StyledCurrencyInputs>
        </StyledForm>
      </StyledContainer>
      <ErrorNotification open={open} onClose={handleClose}>
        {error}
      </ErrorNotification>
    </>
  );
};
