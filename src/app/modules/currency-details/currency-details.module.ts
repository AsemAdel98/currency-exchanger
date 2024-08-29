import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyDetailsRoutingModule } from './currency-details-routing.module';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ConverterComponent } from '../currency-converter/components/converter/converter.component';
import { HistoricalDataComponent } from './components/historical-data/historical-data.component';


@NgModule({
  declarations: [
    CurrencyDetailsComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    HistoricalDataComponent,
    CurrencyDetailsRoutingModule,
    ConverterComponent,
  ]
})
export class CurrencyDetailsModule { }
