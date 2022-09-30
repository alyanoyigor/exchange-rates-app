import { getConvertedCurrencies } from 'api/converter';
import { roundNumber } from './roundNumber';

type CalculateCurrency = {
  from: string;
  to: string;
  amount: string;
  setLoading: (loading: boolean) => void;
  setOpen: (open: boolean) => void;
  setError: (value: string | null) => void;
  setNewNumber: (value: string) => void;
  setErrorNotification: (error: string | null) => void;
};

export const calculateCurrency = async ({
  from,
  to,
  amount,
  setNewNumber,
  setError,
  setLoading,
  setErrorNotification,
  setOpen,
}: CalculateCurrency) => {
  if (amount.length === 0) {
    setError('Input can not be empty');
    setNewNumber('');
    return;
  }

  if (!/^(?:[1-9]\d*|0(?!(?:\.0+)?$))?(?:\.\d+)?$/.test(amount)) {
    setError('Input must be positive number');
    setNewNumber('');
    return;
  }

  try {
    setLoading(true);
    const response = await getConvertedCurrencies({
      from,
      to,
      amount: Number(amount),
    });
    const roundedNumber = roundNumber(response.result, 3);
    setNewNumber(roundedNumber);
  } catch (error) {
    if (typeof error === 'string') {
      setErrorNotification(error);
      setOpen(true);
    }
  } finally {
    setLoading(false);
  }
};

type CalculateCurrencyWithDelay = CalculateCurrency & {
  wait: number;
  setTimeoutId: (timeoutId: NodeJS.Timeout) => void;
  timeoutId?: NodeJS.Timeout;
};

export const calculateCurrencyWithDelay = ({
  from,
  to,
  amount,
  setNewNumber,
  setError,
  setTimeoutId,
  setLoading,
  setErrorNotification,
  setOpen,
  wait,
  timeoutId,
}: CalculateCurrencyWithDelay) => {
  clearTimeout(timeoutId);

  const newTimeoutId = setTimeout(async () => {
    await calculateCurrency({
      from,
      to,
      amount,
      setNewNumber,
      setLoading,
      setErrorNotification,
      setError,
      setOpen,
    });
    clearTimeout(timeoutId);
  }, wait);

  setTimeoutId(newTimeoutId);
  setError(null);
};
