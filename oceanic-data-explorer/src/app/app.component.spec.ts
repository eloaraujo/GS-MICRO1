import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { DataTableComponent } from './data-table/data-table.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FilterComponent, DataTableComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
