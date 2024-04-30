import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coffee } from '../interfaces/Coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeOptionsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getCoffees() {
    return this.http.get<Coffee[]>(`${this.apiUrl}/coffees`);
  }
}
