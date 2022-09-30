type Rates = {
  [key: string]: number;
};

export type LatestCurrency = {
  base: string;
  date: string;
  rates: Rates;
  success: boolean;
  timestamp: number;
};

type InfoConvertedCurrency = {
  rate: number;
  timestamp: number;
};

type QueryConvertedCurrency = {
  amount: number;
  from: string;
  to: string;
};

export type ConvertedCurrency = {
  date: string;
  info: InfoConvertedCurrency;
  query: QueryConvertedCurrency;
  result: number;
  success: boolean;
};

export enum CurrencyValues {
  UAH = 'UAH',
  USD = 'USD',
  EUR = 'EUR',
}
