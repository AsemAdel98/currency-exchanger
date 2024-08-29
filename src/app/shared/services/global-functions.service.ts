import { Injectable } from '@angular/core';
import { ConversionResult, ConversionResultCode, HistoricalConversion } from '../../modules/currency-converter/interface/quick-conversions-data';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  amount!: number;
  fromCurrency!: string;
  toCurrency!: string;
  conversionResult!: number;
  quickConversions!: ConversionResult[];
  quickConversionsCurrencies!: ConversionResultCode[];
  fromToChanged: boolean = true;
  private readonly predefinedAmounts = [10, 20, 50, 100, 200];
  private readonly predefinedcodes = ['USD', 'EUR', 'GBP', 'JPY'];

  private readonly localStorageKey = 'conversionHistory';

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const fromCurrencyParam = params.get('from');
      if (fromCurrencyParam) {
        this.fromCurrency = fromCurrencyParam;
      }
    })
  }

  private calculateQuickConversion(exchangeRates: any, amount: number): ConversionResult {
    const fromTo = amount * (exchangeRates[this.toCurrency] / exchangeRates[this.fromCurrency]);
    const toFrom = amount * (exchangeRates[this.fromCurrency] / exchangeRates[this.toCurrency]);
    return {
      fromTo: fromTo,
      toFrom: toFrom,
      amount: amount
    };
  }

  private calculateQuickConversionCurrencies(exchangeRates: any, currency: string): ConversionResultCode {
    const fromTo = this.amount * (exchangeRates[currency] / exchangeRates[this.fromCurrency]);
    const toFrom = this.amount * (exchangeRates[this.toCurrency] / exchangeRates[currency]);
    return {
      from:this.fromCurrency,
      to:currency,
      fromTo: fromTo,
      toFrom: toFrom,
      amount: this.amount
    };
  }
  handleConvert(exchangeRates: any): void {
    const fromCurrencyValue = exchangeRates[this.toCurrency] / exchangeRates[this.fromCurrency];
    this.conversionResult = this.amount * fromCurrencyValue;
    this.quickConversions = this.predefinedAmounts.map(amount => this.calculateQuickConversion(exchangeRates, amount));
    this.quickConversionsCurrencies = this.predefinedcodes.map(currency => this.calculateQuickConversionCurrencies(exchangeRates,currency));
    this.fromToChanged = true;

    this.saveConversionHistory(this.amount, this.conversionResult);
  }

  private saveConversionHistory(amount: number, result: number): void {
    const history: HistoricalConversion[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const newRecord: HistoricalConversion = {
      date: new Date().toISOString(),
      fromCurrency: this.fromCurrency,
      toCurrency: this.toCurrency,
      amount: amount,
      result: result
    };
    history.push(newRecord);
    localStorage.setItem(this.localStorageKey, JSON.stringify(history));
  }

  filterConversionsByDate(selectedDate: Date): HistoricalConversion[] {
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const history: HistoricalConversion[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    return history.filter(conversion => {
      const conversionDate = new Date(conversion.date).toISOString().split('T')[0];
      return conversionDate === formattedDate;
    });
  }

  filterConversionsByMonth(selectedMonth: Date): HistoricalConversion[] {
    const month = selectedMonth.getMonth();
    const year = selectedMonth.getFullYear();
    const history: HistoricalConversion[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    return history.filter(conversion => {
      const conversionDate = new Date(conversion.date);
      return conversionDate.getMonth() === month && conversionDate.getFullYear() === year;
    });
  }

  filterConversionsByYear(selectedYear: Date): HistoricalConversion[] {
    const year = selectedYear.getFullYear();
    const history: HistoricalConversion[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    return history.filter(conversion => new Date(conversion.date).getFullYear() === year);
  }
}
