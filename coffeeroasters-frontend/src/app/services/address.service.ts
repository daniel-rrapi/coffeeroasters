import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../interfaces/Address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCurrentUserAddresses() {
    return this.http.get<Address[]>(`${this.apiUrl}/addresses/me`);
  }
}
