import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllActiveProducts() {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/product/getAllActive', { headers });
  }
  getAllUser() {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/user/getAll', { headers });
  }
  getAllExpiredProducts() {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/product/getAllExpired', { headers });
  }
  getAllUpcomingProducts() {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/product/getUpcomingProducts', { headers });
  }

}
