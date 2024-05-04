import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss'],
})
export class PaymentCheckoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue() {
    this.router.navigateByUrl('/checkout/confirm');
  }
}
