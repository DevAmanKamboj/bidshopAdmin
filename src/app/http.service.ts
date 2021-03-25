import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { FormatWidth } from '@angular/common';
import { ProductService } from './shared/models/product.service';
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
    //  headers.append('Content-Type', 'multipart/form-data');
    //  headers.append('Accept', 'application/json');
    // headers.delete('Content-Type');
    // headers.set("enctype", "multipart/form-data");

    //   const list = [ 
    //     { 'file': file}
    //  ];
    // headers.delete("Content-Type");
    // const formData = new FormData();
    // product.startDateTime = null;
    // product.endDateTime = null;

    // Array.prototype.forEach.call(addProductForm.images, element => {
    //   formData.append('images', JSON.stringify(element));
    // });



    // let params = new HttpParams();
    // params.set('productId', JSON.stringify(productId));
    // params.set('product', JSON.stringify(product));

    // var productNew = new ProductService();
    // formData.append('productId', JSON.stringify(addProductForm.productId));
    // formData.append('product', JSON.stringify(addProductForm.product));
    // formData.append('images', JSON.stringify(addProductForm.images));

    // file.forEach(function (element) {
    //   formData.append('file', element);
    // });

    // formData.append('file', JSON.stringify(file));
    // console.log(formData.get("file"));
    // console.log(file);
    // console.log(JSON.stringify(file));
    // formData.append('enctype', 'application/x-www-form-urlencoded');
    // console.log("form data=" + formData.get('file'));


    // return this.http.post('http://localhost:8080/product/uploadImages', formData, { headers });

    // const obj: Object(productId: number);
    // product.startDateTime =new Date(this.datePipe.transform(product.startDateTime, 'YYYY-MM-dd HH:mm:ss'));
    // let datas=JSON.stringify(product);
    return this.http.post('http://192.168.18.25:8080/product/addUpdateProduct', product, { headers });
  }

  addUpdateImages(images: File[], productId: number) {
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    // headers.append('Content-Type', 'multipart/form-data');
    const formData = new FormData();

    formData.append('productId', JSON.stringify(productId));

    // images.forEach(function (element) {
    //   formData.append('images', element);
    // });


    Array.prototype.forEach.call(images, element => {
      formData.append('images', element);
    });

    return this.http.post('http://192.168.18.25:8080/product/uploadImages', formData, { headers });

  }
}