export interface ConversionResult {
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
