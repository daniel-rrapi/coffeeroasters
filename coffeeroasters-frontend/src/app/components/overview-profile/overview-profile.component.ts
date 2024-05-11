import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/UserData';

@Component({
  selector: 'app-overview-profile',
  templateUrl: './overview-profile.component.html',
  styleUrls: ['./overview-profile.component.scss'],
})
export class OverviewProfileComponent implements OnInit {
  currentUser: UserData | null = null;

  constructor(private authSrv: AuthService) {
    authSrv.user$.subscribe((res) => (this.currentUser = res));
  }

  ngOnInit(): void {}
}
