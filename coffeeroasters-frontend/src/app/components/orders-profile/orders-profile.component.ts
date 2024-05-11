import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-profile',
  templateUrl: './orders-profile.component.html',
  styleUrls: ['./orders-profile.component.scss'],
})
export class OrdersProfileComponent implements OnInit {
  allOrders!: Order[];
  constructor(private orderSrv: OrderService) {
    orderSrv.getAllPersonalOrders().subscribe((res) => {
      this.allOrders = res;
    });
  }

  ngOnInit(): void {}
}
