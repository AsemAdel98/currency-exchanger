import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, switchMap, tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../../../enviroments/environment';
import { RatesResponse, SymbolsResponse } from '../interface/quick-conversions-data';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly baseUrl = environment.baseUrl;
  private readonly accessKey = environment.accessKey;

  private readonly ratesTTL = 900000; // 15 minutes in milliseconds

  private symbols$!: Observable<SymbolsResponse>;
  private rates$!: Observable<RatesResponse>;
  private lastRatesFetch = 0;

  constructor(private http: HttpClient) {
    this.initializeSymbolsObservable();
    this.initializeRatesObservable();
  }

  private initializeSymbolsObservable(): void {
    this.symbols$ = this.http.get<SymbolsResponse>(`${this.baseUrl}symbols?access_key=${this.accessKey}`)
      .pipe(
        shareReplay(1),
        catchError(error => {
          console.error('Error fetching symbols', error);
          return of({ success: false, symbols: {} });
        })
      );
  }

  private initializeRatesObservable(): void {
    this.rates$ = this.http.get<RatesResponse>(`${this.baseUrl}latest?access_key=${this.accessKey}`)
          .pipe(
            shareReplay(1),
            catchError(error => {
              console.error('Error fetching rates', error);
              return of({ success: false, timestamp: 0, rates: {} });
            })
          );
  }

  getSymbolsList(): Observable<SymbolsResponse> {
    return this.symbols$;
  }

  convertCurrencies(): Observable<RatesResponse> {
    return this.rates$;
  }
}
