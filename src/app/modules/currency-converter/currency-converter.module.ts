import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { ConverterComponent } from './components/converter/converter.component';
import { QuickConversionsComponent } from './components/quick-conversions/quick-conversions.component';
import { ConverterPageComponent } from './pages/converter-page/converter-page.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ConverterComponent,
    QuickConversionsComponent,
    ConverterPageComponent
  ],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule,
    InputNumberModule,
    DropdownModule,
    FormsModule,
    ButtonModule
  ]
})
export class CurrencyConverterModule { }
