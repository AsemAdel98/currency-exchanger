import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../../app-routing.module';
import { MenuItem } from 'primeng/api';
import { GlobalFunctionsService } from '../services/global-functions.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    MenubarModule,
    AppRoutingModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public global: GlobalFunctionsService) { }

  menuSidebar: MenuItem[] = [
    {
      route: '/details', label: 'USD Details', currency: 'USD', command: () => {
        this.global.toCurrency = '';
        this.global.amount = 0;
        this.global.conversionResult = 0
      }
    },
    {
      route: '/details', label: 'EUR Details', currency: 'EUR', command: () => {
        this.global.toCurrency = '';
        this.global.amount = 0;
        this.global.conversionResult = 0
      }
    },
  ];

}
