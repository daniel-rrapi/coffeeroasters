import { Injectable } from '@angular/core';
import { Address } from '../interfaces/Address';

@Injectable({
  providedIn: 'root',
})
export class OrderSharingService {
  currentOrderDetails: Object[] = [];
  currentAddressId: string | null = null;
  constructor() {}
}
