import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    if (email && password) this.authSrv.login(email, password).subscribe();
  }
}
