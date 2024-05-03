import { Component, OnDestroy, OnInit } from '@angular/core';
import { Address } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  currentOrderDetails!: Object[];
  addresses!: Address[];
  constructor(private orderSharingSrv: OrderSharingService) {
    this.currentOrderDetails = orderSharingSrv.currentOrderDetails;
  }
  ngOnDestroy(): void {
    this.orderSharingSrv.currentOrderDetails = [];
  }

  ngOnInit(): void {}
}
