import { ConvertedCurrency, LatestCurrency } from 'types';
import client from './client';

type GetLatestCurrencies = {
  base: string;
  symbols: string[];
};

export const getLatestCurrencies = async ({
  base,
  symbols,
}: GetLatestCurrencies) => {
  try {
    return await client.get<never, LatestCurrency>(
      `/latest?symbols=${symbols.join(',')}&base=${base}`
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

type GetConvertedCurrencies = {
  to: string;
  from: string;
  amount: number;
};

export const getConvertedCurrencies = async ({
  to,
  from,
  amount,
}: GetConvertedCurrencies) => {
  try {
    return await client.get<never, ConvertedCurrency>(
      `/convert?to=${to}&from=${from}&amount=${amount}`
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
