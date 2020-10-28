import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { FormatWidth } from '@angular/common';

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
  getUserDetails(id: string) {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/user/getById/' + id, { headers });
  }

  updateUser(user: Object) {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.post('http://localhost:8080/user/updateFromAdmin', user, { headers });
  }

  getProductDetails(id: string) {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/product/get/' + id, { headers });
  }
  getProductCategory(id: string) {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/productCategory/get/' + id, { headers });
  }

  getAllProductCategory() {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get('http://localhost:8080/productCategory/getAll');
  }

  addProduct(product: Object) {
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.post('http://localhost:8080/product/add', product, { headers });
  }

  uploadProductImages(productId: number, file: File[]) {
    // var files=file;
    const headers = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    // headers.delete('Content-Type');
    // headers.set("enctype","multipart/form-data");

    //   const list = [ 
    //     { 'file': file}
    //  ];
    // headers.delete("Content-Type");
    const formData = new FormData();

    formData.append('file', JSON.stringify(file));
    // console.log(formData.get("file"));
    console.log(file);
    console.log(JSON.stringify(file));
    // formData.append('enctype', 'application/x-www-form-urlencoded');
    // console.log("form data=" + formData.get('file'));


    return this.http.post('http://localhost:8080/product/uploadImages', formData, { headers });
  }
}