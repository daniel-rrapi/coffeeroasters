import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewOrder } from '../interfaces/NewOrder';
import { Order } from '../interfaces/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  createNewOrder(payload: NewOrder) {
    return this.http.post(`${this.apiUrl}/orders`, payload);
  }

  getAllPersonalOrders() {
    return this.http.get<Order[]>(`${this.apiUrl}/orders/me`);
  }
}
