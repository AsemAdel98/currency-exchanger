import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyDetailsRoutingModule } from './currency-details-routing.module';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { HistoricalDataComponent } from './components/historical-data/historical-data.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';


@NgModule({
  declarations: [
    CurrencyDetailsComponent,
    HistoricalDataComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    CurrencyDetailsRoutingModule
  ]
})
export class CurrencyDetailsModule { }
