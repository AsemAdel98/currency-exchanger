import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../../app-routing.module';
import { MenuItem } from 'primeng/api';

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

  menuSidebar: MenuItem[] = [
    { route: '', label: 'USD Details' },
    { route: '', label: 'EUR Details' },
  ];

}
