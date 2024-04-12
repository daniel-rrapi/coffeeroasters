import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-choose-your-coffee',
  templateUrl: './create-choose-your-coffee.component.html',
  styleUrls: ['./create-choose-your-coffee.component.scss'],
})
export class CreateChooseYourCoffeeComponent implements OnInit {
  isCapsule: boolean = true;
  isFilter: boolean = false;
  isEspresso: boolean = false;

  isSingleOrigin: boolean = true;
  isDecaf: boolean = false;
  isBlended: boolean = false;

  is250g: boolean = true;
  is500g: boolean = false;
  is1000g: boolean = false;

  isWholeBean: boolean = true;
  isFiltered: boolean = false;
  isCafetiere: boolean = false;

  isEvery1Week: boolean = true;
  isEvery2Week: boolean = false;
  isEveryMonth: boolean = false;

  constructor() {}
  selectCapsule() {
    if (!this.isCapsule) this.isCapsule = true;
    if (this.isFilter) this.isFilter = !this.isFilter;
    if (this.isEspresso) this.isEspresso = !this.isEspresso;
  }
  selectFilter() {
    if (!this.isFilter) this.isFilter = true;
    if (this.isCapsule) this.isCapsule = !this.isCapsule;
    if (this.isEspresso) this.isEspresso = !this.isEspresso;
  }
  selectEspresso() {
    if (!this.isEspresso) this.isEspresso = true;
    if (this.isCapsule) this.isCapsule = !this.isCapsule;
    if (this.isFilter) this.isFilter = !this.isFilter;
  }

  selectSingleOrigin() {
    if (!this.isSingleOrigin) this.isSingleOrigin = true;
    if (this.isDecaf) this.isDecaf = !this.isDecaf;
    if (this.isBlended) this.isBlended = !this.isBlended;
  }
  selectDecaf() {
    if (!this.isDecaf) this.isDecaf = true;
    if (this.isSingleOrigin) this.isSingleOrigin = !this.isSingleOrigin;
    if (this.isBlended) this.isBlended = !this.isBlended;
  }
  selectBlended() {
    if (!this.isBlended) this.isBlended = true;
    if (this.isSingleOrigin) this.isSingleOrigin = !this.isSingleOrigin;
    if (this.isDecaf) this.isDecaf = !this.isDecaf;
  }

  select250g() {
    if (!this.is250g) this.is250g = true;
    if (this.is500g) this.is500g = !this.is500g;
    if (this.is1000g) this.is1000g = !this.is1000g;
  }
  select500g() {
    if (!this.is500g) this.is500g = true;
    if (this.is250g) this.is250g = !this.is250g;
    if (this.is1000g) this.is1000g = !this.is1000g;
  }
  select1000g() {
    if (!this.is1000g) this.is1000g = true;
    if (this.is500g) this.is500g = !this.is500g;
    if (this.is250g) this.is250g = !this.is250g;
  }

  selectWholeBean() {
    if (!this.isWholeBean) this.isWholeBean = true;
    if (this.isFiltered) this.isFiltered = !this.isFiltered;
    if (this.isCafetiere) this.isCafetiere = !this.isCafetiere;
  }
  selectFiltered() {
    if (!this.isFiltered) this.isFiltered = true;
    if (this.isWholeBean) this.isWholeBean = !this.isWholeBean;
    if (this.isCafetiere) this.isCafetiere = !this.isCafetiere;
  }
  selectCafetiere() {
    if (!this.isCafetiere) this.isCafetiere = true;
    if (this.isFiltered) this.isFiltered = !this.isFiltered;
    if (this.isWholeBean) this.isWholeBean = !this.isWholeBean;
  }

  select1Week() {
    if (!this.isEvery1Week) this.isEvery1Week = true;
    if (this.isEvery2Week) this.isEvery2Week = !this.isEvery2Week;
    if (this.isEveryMonth) this.isEveryMonth = !this.isEveryMonth;
  }
  select2Week() {
    if (!this.isEvery2Week) this.isEvery2Week = true;
    if (this.isEvery1Week) this.isEvery1Week = !this.isEvery1Week;
    if (this.isEveryMonth) this.isEveryMonth = !this.isEveryMonth;
  }
  selectEveryMonth() {
    if (!this.isEveryMonth) this.isEveryMonth = true;
    if (this.isEvery1Week) this.isEvery1Week = !this.isEvery1Week;
    if (this.isEvery2Week) this.isEvery2Week = !this.isEvery2Week;
  }

  ngOnInit(): void {}
}
