import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-checkout',
  templateUrl: './address-checkout.component.html',
  styleUrls: ['./address-checkout.component.scss'],
})
export class AddressCheckoutComponent implements OnInit {
  addresses!: Address[];
  constructor(private addressSrv: AddressService) {
    addressSrv.getCurrentUserAddresses().subscribe((res) => {
      this.addresses = res;
    });
  }

  ngOnInit(): void {}
}
