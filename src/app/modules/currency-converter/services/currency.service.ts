import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../../enviroments/environment';
import { RatesResponse, SymbolsResponse } from '../interface/quick-conversions-data';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly baseUrl = environment.baseUrl;
  private readonly accessKey = environment.accessKey;
  private symbols$!: Observable<SymbolsResponse>;

  constructor(private http: HttpClient) {}
  getSymbolsList(): Observable<SymbolsResponse> {
    if (!this.symbols$) {
      this.symbols$ = this.http.get<SymbolsResponse>(`${this.baseUrl}symbols?access_key=${this.accessKey}`).pipe(
        shareReplay(1),
      );
    }
    return this.symbols$;
  }
  convertCurrencies(): Observable<RatesResponse> {
    return this.http.get<RatesResponse>(`${this.baseUrl}latest?access_key=${this.accessKey}`);
  }
}
