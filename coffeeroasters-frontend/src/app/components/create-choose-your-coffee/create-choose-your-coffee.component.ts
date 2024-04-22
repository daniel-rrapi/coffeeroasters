import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoffeeOptionsService } from 'src/app/services/coffee-options.service';

@Component({
  selector: 'app-create-choose-your-coffee',
  templateUrl: './create-choose-your-coffee.component.html',
  styleUrls: ['./create-choose-your-coffee.component.scss'],
})
export class CreateChooseYourCoffeeComponent implements OnInit {
  preferencies: string[] = [];
  coffeeTypes: string[] = [];
  quantities: string[] = [];
  grindTypes: string[] = [];
  shippingFrequencies: string[] = [];

  coffeeForm = new FormGroup({
    preference: new FormControl(),
    type: new FormControl(),
    quantity: new FormControl(),
    grindType: new FormControl(),
    shippingFrequency: new FormControl(),
  });

  constructor(private coffeeSrv: CoffeeOptionsService) {
    coffeeSrv.getCoffeePreferencies().subscribe((res) => {
      this.preferencies = res;
      this.coffeeForm.value.preference = this.preferencies[0];
    });
    coffeeSrv.getCoffeeTypes().subscribe((res) => {
      this.coffeeTypes = res;
      this.coffeeForm.value.type = this.coffeeTypes[0];
    });
    coffeeSrv.getCoffeeQuantities().subscribe((res) => {
      this.quantities = res;
      this.coffeeForm.value.quantity = this.quantities[0];
    });
    coffeeSrv.getGrindTypes().subscribe((res) => {
      this.grindTypes = res;
      this.coffeeForm.value.grindType = this.grindTypes[0];
    });
    coffeeSrv.getShippingFrequency().subscribe((res) => {
      this.shippingFrequencies = res;
      this.coffeeForm.value.shippingFrequency = this.shippingFrequencies[0];
    });
  }

  ngOnInit(): void {}

  selectCoffeePreference(preference: string) {
    this.coffeeForm.value.preference = preference;
  }

  selectCoffeeType(type: string) {
    this.coffeeForm.value.type = type;
  }

  selectCoffeeQuantity(quantity: string) {
    this.coffeeForm.value.quantity = quantity;
  }

  selectGrindType(grindType: string) {
    this.coffeeForm.value.grindType = grindType;
  }

  selectShippingFrequency(shippingFrequency: string) {
    this.coffeeForm.value.shippingFrequency = shippingFrequency;
  }

  onSubmit() {}
}
