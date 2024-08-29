export interface ConversionResult {
  fromTo: number;
  toFrom: number;
  amount: number;
}
export interface ConversionResultCode {
  from:string;
  to: string;
  fromTo: number;
  toFrom: number;
  amount: number;
}

export interface SymbolsResponse {
  success: boolean;
  symbols: Record<string, string>;
}

export interface RatesResponse {
  success: boolean;
  timestamp: number;
  rates: Record<string, number>;
}


export interface HistoricalConversion {
  date: string; // Date in ISO string format
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  result: number;
}
