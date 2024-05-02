import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderSharingService {
  currentOrderDetails: Object[] = [];
  constructor() {}
}
