import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net';

  constructor(private http: HttpClient) {}

  getFilteredData(filters: any): Observable<any[]> {
    // Implementar a lógica para aplicar filtros na API
    return this.http.get<any[]>(`${this.apiUrl}/data`, { params: filters });
  }
}
