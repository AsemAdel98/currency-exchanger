import { Component, Input } from '@angular/core';
import { ConversionResult } from '../../interface/quick-conversions-data';
import { GlobalFunctionsService } from '../../../../shared/services/global-functions.service';

@Component({
  selector: 'app-quick-conversions',
  templateUrl: './quick-conversions.component.html',
  styleUrl: './quick-conversions.component.scss'
})
export class QuickConversionsComponent {
  @Input() conversionResults!: ConversionResult[];
  constructor(public global:GlobalFunctionsService){}
}
