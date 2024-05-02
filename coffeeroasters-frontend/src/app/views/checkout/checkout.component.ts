import { Component, OnInit } from '@angular/core';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  currentOrderDetails!: Object[];
  constructor(private orderSharingSrv: OrderSharingService) {
    this.currentOrderDetails = orderSharingSrv.currentOrderDetails;
  }

  ngOnInit(): void {}
}
