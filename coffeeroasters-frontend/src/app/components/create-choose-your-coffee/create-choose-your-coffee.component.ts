import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Coffee } from 'src/app/interfaces/Coffee';
import { CoffeeOptionsService } from 'src/app/services/coffee-options.service';

@Component({
  selector: 'app-create-choose-your-coffee',
  templateUrl: './create-choose-your-coffee.component.html',
  styleUrls: ['./create-choose-your-coffee.component.scss'],
})
export class CreateChooseYourCoffeeComponent implements OnInit {
  coffees!: Coffee[];
  selectedOptions = { selectedOptions: [] };

  constructor(private coffeeSrv: CoffeeOptionsService) {
    coffeeSrv.getCoffees().subscribe((res) => {
      this.coffees = res;
    });
  }

  ngOnInit(): void {}

  selectOption(id: string) {}
}
