export interface CurrencyProps {
  base: string | undefined;
  rates: { [key: string]: number } | object
}

export interface RatesProps {
  rates: Rates | null | undefined
}

export interface Rates {
  [key: string]: number
}