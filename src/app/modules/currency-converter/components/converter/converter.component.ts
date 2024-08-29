import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CurrencyConverterRoutingModule } from '../../currency-converter-routing.module';
import { GlobalFunctionsService } from '../../../../shared/services/global-functions.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    CurrencyConverterRoutingModule,
    DropdownModule,
    FormsModule,
    ButtonModule
  ],
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  exchangeRates: any;
  currencies!: Record<string, string>;
  currenciesCode!: string[];
  currenciesName!: { label: string, value: string }[];

  conversionResultFromTo!: number;
  conversionResultToFrom!: number;

  constructor(public router: Router, private service: CurrencyService, public global: GlobalFunctionsService) { }

  ngOnInit(): void {
    this.handleGetSymbols();
    this.getRates();
  }

  private handleGetSymbols(): void {
    this.service.getSymbolsList().subscribe({
      next: (res) => {
        this.currencies = res.symbols;

        this.currenciesCode = Object.keys(res.symbols);

        this.currenciesName = Object.keys(res.symbols).map(key => ({
          label: `${res.symbols[key]} (${key})`,
          value: key
        }));

      }
    })
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
