import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/UserData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser: null | UserData = null;
  currentUrl = '';

  constructor(private authSrv: AuthService, private router: Router) {
    authSrv.user$.subscribe((res) => (this.currentUser = res));
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentUrl();
      }
    });
    this.checkCurrentUrl();
  }

  ngOnInit(): void {}

  checkCurrentUrl() {
    this.currentUrl = this.router.url;
  }

  onClickLogout() {
    this.authSrv.logout();
  }
}
