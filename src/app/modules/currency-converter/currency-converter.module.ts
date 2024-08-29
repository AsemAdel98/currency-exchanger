import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { ConverterComponent } from './components/converter/converter.component';
import { QuickConversionsComponent } from './components/quick-conversions/quick-conversions.component';
import { ConverterPageComponent } from './pages/converter-page/converter-page.component';


@NgModule({
  declarations: [
    QuickConversionsComponent,
    ConverterPageComponent
  ],
  imports: [
    CommonModule,
    ConverterComponent,
    CurrencyConverterRoutingModule,
  ]
})
export class CurrencyConverterModule { }
