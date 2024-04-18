import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/UserData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser: null | UserData = null;

  constructor(private authSrv: AuthService) {
    authSrv.user$.subscribe((res) => (this.currentUser = res));
  }

  ngOnInit(): void {}

  onClickLogout() {
    this.authSrv.logout();
  }
}
