import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { FormatWidth } from '@angular/common';
import { ProductService } from './shared/models/product.service';
// import { DatePipe } from '@angular/common';
// import { DatePipe } from '@angular/common';

import { AddProductService } from './shared/forms/add-product.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllProducts() {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/product/getAll', { headers });
  }
  getAllActiveProducts() {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/product/getAllActive', { headers });
  }
  getAllUser() {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/user/getAll', { headers });
  }
  getAllExpiredProducts() {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/product/getAllExpired', { headers });
  }
  getAllUpcomingProducts() {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/product/getUpcomingProducts', { headers });
  }
  getUserDetails(id: string) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/user/getById/' + id, { headers });
  }
  updateUser(user: Object) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.post('http://192.168.18.25:8080/user/updateFromAdmin', user, { headers });
  }

  getProductDetails(id: string) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/product/get/' + id, { headers });
  }
  getProductCategory(id: number) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/productCategory/get/' + id, { headers });
  }

  getAllProductCategory() {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    return this.http.get('http://192.168.18.25:8080/productCategory/getAll');
  }

  addProduct(product: Object) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));

    return this.http.post('http://192.168.18.25:8080/product/add', product, { headers });
  }

  addUpdateProduct(product: ProductService) {
    // var files=file;
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));

    // for converting timezone to local, we have to set time with new date object
    product.startDateTime = new Date(product.startDateTime);
    product.endDateTime = new Date(product.endDateTime);


    return this.http.post('http://192.168.18.25:8080/product/addUpdateProduct', product, { headers });
  }

  addUpdateImages(images: File[], productId: number) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    // headers.append('Content-Type', 'multipart/form-data');
    const formData = new FormData();

    formData.append('productId', JSON.stringify(productId));


    Array.prototype.forEach.call(images, element => {
      formData.append('images', element);
    });

    return this.http.post('http://192.168.18.25:8080/product/uploadImages', formData, { headers });

  } 
}