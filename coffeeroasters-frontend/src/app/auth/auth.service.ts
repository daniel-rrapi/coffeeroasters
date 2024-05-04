import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  tap,
  throwError,
} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserData } from '../interfaces/UserData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = new JwtHelperService();
  private apiUrl = environment.apiUrl;
  private authSubj = new BehaviorSubject<null | UserData>(null);
  user$ = this.authSubj.asObservable();
  constructor(private http: HttpClient, private router: Router) {}

  getAndSetAuthenticatedUser() {
    return this.http
      .get<UserData>(`${this.apiUrl}/auth/me`)
      .pipe(map((currentUser) => this.authSubj.next(currentUser)));
  }

  login(email: string, password: string) {
    return this.http
      .post(
        `${this.apiUrl}/auth/login`,
        {
          email,
          password,
        },
        { responseType: 'text' }
      )
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res);
          this.getAndSetAuthenticatedUser().subscribe();
          this.router.navigate(['']);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  restore() {
    const token = localStorage.getItem('token');
    if (!this.authSubj.value && token) {
      this.getAndSetAuthenticatedUser().subscribe();
    }
    if (this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['/login']);
      return;
    }
  }

  isAuthenticated() {
    if (this.authSubj.value) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    this.authSubj.next(null);
  }
}
