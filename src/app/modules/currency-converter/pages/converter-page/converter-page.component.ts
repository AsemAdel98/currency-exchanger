import { Component } from '@angular/core';
import { GlobalFunctionsService } from '../../../../shared/services/global-functions.service';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.scss'
})
export class ConverterPageComponent {
  constructor(public global:GlobalFunctionsService){}

}
