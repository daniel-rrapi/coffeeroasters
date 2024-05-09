import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-address-checkout',
  templateUrl: './address-checkout.component.html',
  styleUrls: ['./address-checkout.component.scss'],
})
export class AddressCheckoutComponent implements OnInit {
  addresses!: Address[];
  selectedAddressId: string | undefined;
  selectedAddressObj: Address | undefined;
  constructor(
    private addressSrv: AddressService,
    private orderSharingSrv: OrderSharingService,
    private router: Router
  ) {
    addressSrv.getCurrentUserAddresses().subscribe((res) => {
      this.addresses = res;
    });
  }

  ngOnInit(): void {}

  onContinue() {
    if (this.selectedAddressId && this.selectedAddressObj) {
      this.orderSharingSrv.currentAddressId = this.selectedAddressId;
      this.orderSharingSrv.currentAddressObj = this.selectedAddressObj;
      this.router.navigate(['/checkout/payment']);
    } else {
      alert('Please select an address');
    }
  }
}
