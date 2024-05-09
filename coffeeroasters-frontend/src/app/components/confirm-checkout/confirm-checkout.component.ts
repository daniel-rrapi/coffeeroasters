import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/interfaces/Address';
import { SelectedOption } from 'src/app/interfaces/SelectedOption';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.scss'],
})
export class ConfirmCheckoutComponent implements OnInit {
  currentOrderDetails: SelectedOption[] = [];
  currentAddressObj: Address | null = null;
  currentPaymentMethod: string | null = '';
  constructor(private orderSharingSrv: OrderSharingService) {
    this.currentOrderDetails = this.orderSharingSrv.currentOrderDetails;
    this.currentPaymentMethod = orderSharingSrv.payment;
    this.currentAddressObj = orderSharingSrv.currentAddressObj;
  }

  ngOnInit(): void {}
}
