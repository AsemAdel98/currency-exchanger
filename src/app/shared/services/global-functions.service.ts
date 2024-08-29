import { Injectable } from '@angular/core';
import { ConversionResult, RatesResponse } from '../../modules/currency-converter/interface/quick-conversions-data';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  amount!: number;
  fromCurrency!: string;
  toCurrency!: string;
  conversionResult!: number;
  quickConversions!:ConversionResult[];
  private readonly predefinedAmounts = [10, 20, 50, 100, 200]; // Array of predefined amounts

  constructor() { }

  private calculateQuickConversion(exchangeRates: any, amount: number,): ConversionResult {
    const fromTo = amount * (exchangeRates[this.toCurrency] / exchangeRates[this.fromCurrency]);
    const toFrom = amount * (exchangeRates[this.fromCurrency] / exchangeRates[this.toCurrency]);
    return {
      fromTo: fromTo,
      toFrom: toFrom,
      amount: amount
    };
  }
  handleConvert(exchangeRates: any): void {
    const fromCurrencyValue = exchangeRates[this.toCurrency] / exchangeRates[this.fromCurrency];
    this.conversionResult = this.amount * fromCurrencyValue;
    this.quickConversions = this.predefinedAmounts.map(amount => this.calculateQuickConversion(exchangeRates, amount));
  }
}
