import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // session: WindowSessionStorage;
  constructor(private http: HttpClient) { }

  getAllExpiredProducts() {
    // String token = this.session.sessionStorage.getItem('token');
    const httpHeader = new HttpHeaders({
      // 'Authorization': sessionStorage.getItem('token')
      'Authorization':sessionStorage.getItem('token')
    });
    // header: Headers;
    // header.append('Authorization', 'Basic ');
    return this.http.get('http://localhost:8080/bid/myBids', { headers: httpHeader });
  }
}
