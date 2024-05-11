import { Injectable } from '@angular/core';
import { Address } from '../interfaces/Address';
import { SelectedOption } from '../interfaces/SelectedOption';

@Injectable({
  providedIn: 'root',
})
export class OrderSharingService {
  currentOrderDetails: SelectedOption[] = [];
  currentAddressId: string | null = null;
  currentAddressObj: Address | null = null;
  payment: string | null = 'On cash';
  constructor() {}
}
