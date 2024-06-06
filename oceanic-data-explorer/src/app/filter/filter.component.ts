import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api-service.service';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FilterComponent {
  filters = {
    region: '',
    species: '',
    conservationStatus: '',
    waterTemperature: '',
    ph: '',
    pollutionLevels: ''
  };

  constructor(private apiService: ApiService, private dataTable: DataTableComponent) {}

  applyFilters() {
    this.apiService.getFilteredData(this.filters).subscribe(data => {
      this.dataTable.updateData(data);
    });
  }
}
