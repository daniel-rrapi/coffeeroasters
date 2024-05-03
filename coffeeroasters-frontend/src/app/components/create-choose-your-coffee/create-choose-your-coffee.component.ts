import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/interfaces/Coffee';
import { CoffeeOptionsService } from 'src/app/services/coffee-options.service';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-create-choose-your-coffee',
  templateUrl: './create-choose-your-coffee.component.html',
  styleUrls: ['./create-choose-your-coffee.component.scss'],
})
export class CreateChooseYourCoffeeComponent implements OnInit {
  coffees!: Coffee[];
  selectedOptions: Object[] = [];
  areSelectedAll = false;

  constructor(
    private coffeeSrv: CoffeeOptionsService,
    private router: Router,
    private orderSharingSrv: OrderSharingService
  ) {
    coffeeSrv.getCoffees().subscribe((res) => {
      this.coffees = res;
    });
  }

  ngOnInit(): void {}

  selectOption(coffee_id: string, option_id: string) {
    let newObj = { [coffee_id]: option_id };
    let found = false;
    this.selectedOptions.forEach((item: any, index: any) => {
      if (item[coffee_id] !== undefined) {
        this.selectedOptions[index] = newObj;
        found = true;
      }
    });
    if (!found) {
      this.selectedOptions.push(newObj);
    }
    if (this.coffees.length === this.selectedOptions.length) {
      this.areSelectedAll = true;
    }
  }

  existOptionId(value: any): boolean {
    return this.selectedOptions.some((item) =>
      Object.values(item).includes(value)
    );
  }

  onSubmit() {
    console.log('pippo');
    this.orderSharingSrv.currentOrderDetails = this.selectedOptions;
    this.router.navigateByUrl('/checkout/address');
  }
}
