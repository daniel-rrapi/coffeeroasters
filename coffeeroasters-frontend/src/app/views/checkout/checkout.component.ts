import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Address } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy, OnChanges {
  currentUrl = '';
  currentOrderDetails!: Object[];
  addresses!: Address[];
  constructor(
    private orderSharingSrv: OrderSharingService,
    private router: Router
  ) {
    this.currentOrderDetails = orderSharingSrv.currentOrderDetails;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentUrl();
      }
    });
    this.checkCurrentUrl();
  }
  ngOnInit(): void {}
  ngOnChanges(): void {}
  ngOnDestroy(): void {
    this.orderSharingSrv.currentOrderDetails = [];
    this.orderSharingSrv.currentAddressId = null;
  }

  checkCurrentUrl() {
    this.currentUrl = this.router.url;
  }
}
