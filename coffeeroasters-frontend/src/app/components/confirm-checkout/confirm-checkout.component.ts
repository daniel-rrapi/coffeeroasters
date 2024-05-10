import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/interfaces/Address';
import { NewOrder } from 'src/app/interfaces/NewOrder';
import { SelectedOption } from 'src/app/interfaces/SelectedOption';
import { OrderSharingService } from 'src/app/services/order-sharing.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.scss'],
})
export class ConfirmCheckoutComponent implements OnInit {
  currentOrderDetails: SelectedOption[] = [];
  currentAddressObj: Address | null = null;
  currentPaymentMethod: string | null = '';
  constructor(
    private orderSharingSrv: OrderSharingService,
    private orderSrv: OrderService,
    private router: Router
  ) {
    this.currentOrderDetails = this.orderSharingSrv.currentOrderDetails;
    this.currentPaymentMethod = orderSharingSrv.payment;
    this.currentAddressObj = orderSharingSrv.currentAddressObj;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.currentOrderDetails.length !== 0 ||
      this.currentAddressObj ||
      this.currentPaymentMethod
    ) {
      if (this.currentAddressObj?._id) {
        let order: NewOrder = {
          address: this.currentAddressObj?._id,
          coffeeSelections: this.currentOrderDetails,
        };
        this.orderSrv.createNewOrder(order).subscribe(
          (res) => {
            this.router.navigateByUrl('/checkout/done');
          },
          (err) => {
            alert(err);
          }
        );
      }
    }
  }
}
