import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUrl = '';
  isOverview = false;
  isOrders = false;
  constructor(private router: Router) {
    this.checkPageUrl();
  }

  ngOnInit(): void {}

  checkPageUrl() {
    this.currentUrl = this.router.url;
    if (this.currentUrl.includes('/profile/overview')) {
      this.isOverview = true;
      this.isOrders = false;
    }
    if (this.currentUrl.includes('/profile/your-orders')) {
      this.isOverview = false;
      this.isOrders = true;
    }
  }
}
