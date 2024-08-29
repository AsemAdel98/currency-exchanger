import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { HistoricalConversion } from '../../../currency-converter/interface/quick-conversions-data';
import { GlobalFunctionsService } from '../../../../shared/services/global-functions.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.component.html',
  standalone: true,
  imports:[
    CommonModule,
    TableModule,
    CalendarModule,
    FormsModule,
    ButtonModule
  ],
  styleUrl: './historical-data.component.scss'
})
export class HistoricalDataComponent {
  selectedDate?: Date;
  selectedMonth?: Date;
  selectedYear?: Date;
  filteredConversions: HistoricalConversion[] = [];

  constructor(private globalFunctionsService: GlobalFunctionsService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadAllConversions();
    }
  }

  loadAllConversions(): void {
    this.filteredConversions = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
  }

  private applyFilters(): void {
    if (this.selectedDate) {
      this.filteredConversions = this.globalFunctionsService.filterConversionsByDate(this.selectedDate);
    } else if (this.selectedMonth) {
      this.filteredConversions = this.globalFunctionsService.filterConversionsByMonth(this.selectedMonth);
    } else if (this.selectedYear) {
      this.filteredConversions = this.globalFunctionsService.filterConversionsByYear(this.selectedYear);
    } else {
      this.loadAllConversions();
    }
    console.log(this.filteredConversions);

  }

  onDaySelect(event: any): void {
    this.selectedMonth = undefined;
    this.selectedYear = undefined;
    console.log(this.filteredConversions);

    this.applyFilters();
  }

  onMonthSelect(event: any): void {
    this.selectedDate = undefined;
    this.selectedYear = undefined;
    console.log(this.filteredConversions);

    this.applyFilters();
  }

  onYearSelect(event: any): void {
    this.selectedDate = undefined;
    this.selectedMonth = undefined;
    this.applyFilters();
  }

  clearFilters(): void {
    this.selectedDate = undefined;
    this.selectedMonth = undefined;
    this.selectedYear = undefined;
    this.loadAllConversions(); // Reload all data
  }
}
