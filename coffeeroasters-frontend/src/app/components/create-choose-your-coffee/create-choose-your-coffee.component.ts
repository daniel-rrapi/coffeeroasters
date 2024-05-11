import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/interfaces/Coffee';
import { SelectedOption } from 'src/app/interfaces/SelectedOption';
import { CoffeeOptionsService } from 'src/app/services/coffee-options.service';
import { OrderSharingService } from 'src/app/services/order-sharing.service';

@Component({
  selector: 'app-create-choose-your-coffee',
  templateUrl: './create-choose-your-coffee.component.html',
  styleUrls: ['./create-choose-your-coffee.component.scss'],
})
export class CreateChooseYourCoffeeComponent implements OnInit {
  coffees!: Coffee[];
  isResponseOk = false;
  selectedOptions: SelectedOption[] = [];
  areSelectedAll = false;

  constructor(
    private coffeeSrv: CoffeeOptionsService,
    private router: Router,
    private orderSharingSrv: OrderSharingService
  ) {
    coffeeSrv.getCoffees().subscribe((res) => {
      this.coffees = res;
      this.isResponseOk = true;
    });
  }

  ngOnInit(): void {}

  selectOption(
    coffeeField: string,
    selectedOption: string,
    coffeeName: string,
    optionName: string
  ) {
    let newObj: SelectedOption = {
      coffeeField,
      selectedOption,
      coffeeName,
      optionName,
    };
    let found = false;
    this.selectedOptions.forEach((item: any, index: any) => {
      if (item[coffeeField] !== undefined) {
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
    this.orderSharingSrv.currentOrderDetails = this.selectedOptions;
    this.router.navigateByUrl('/checkout/address');
  }
}
