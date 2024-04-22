import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoffeeOptionsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCoffeePreferencies() {
    return this.http.get<string[]>(`${this.apiUrl}/coffee/preferencies`);
  }

  getCoffeeTypes() {
    return this.http.get<string[]>(`${this.apiUrl}/coffee/types`);
  }

  getCoffeeQuantities() {
    return this.http.get<string[]>(`${this.apiUrl}/coffee/quantities`);
  }

  getGrindTypes() {
    return this.http.get<string[]>(`${this.apiUrl}/coffee/grind`);
  }

  getShippingFrequency() {
    return this.http.get<string[]>(`${this.apiUrl}/coffee/shipping-frequency`);
  }
}
