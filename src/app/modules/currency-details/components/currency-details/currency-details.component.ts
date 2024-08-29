import { Component } from '@angular/core';
import { GlobalFunctionsService } from '../../../../shared/services/global-functions.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrl: './currency-details.component.scss'
})
export class CurrencyDetailsComponent {
  constructor(public global:GlobalFunctionsService){}

}
