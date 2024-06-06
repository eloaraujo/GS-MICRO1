import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DataTableComponent {
  data: any[] = [];

  updateData(newData: any[]) {
    this.data = newData;
  }
}
