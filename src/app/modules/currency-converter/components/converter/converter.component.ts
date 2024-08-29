import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';
import { GlobalFunctionsService } from '../../../../shared/services/global-functions.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  exchangeRates: any;
  currencies!: string[];

  conversionResultFromTo!: number;
  conversionResultToFrom!: number;

  constructor(private router: Router, private service: CurrencyService, public global: GlobalFunctionsService) { }

  ngOnInit(): void {
    this.handleGetSymbols();
    this.getRates();
  }

  private handleGetSymbols(): void {
    this.service.getSymbolsList().subscribe({ next: (res) => { this.currencies = Object.keys(res.symbols); } })
  }

  private getRates(): void {
    this.service.convertCurrencies().subscribe({ next: (res) => { this.exchangeRates = res.rates } })
  }

  swapCurrencies(): void {
    [this.global.fromCurrency, this.global.toCurrency] = [this.global.toCurrency, this.global.fromCurrency];
    this.global.handleConvert(this.exchangeRates)
  }

  redirectToDetails(): void {
    this.router.navigate(['/details'], { queryParams: { from: this.global.fromCurrency, to: this.global.toCurrency } });
  }
}
