import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/http.service';
import { DataService } from 'src/app/shared/data.service';
import { AddProductService } from 'src/app/shared/forms/add-product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCategoryService } from 'src/app/shared/models/product-category.service';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [DatePipe]
})
export class AddProductComponent implements OnInit {

  product = new ProductService();
  productCategory: ProductCategoryService[];
  images: File[];

  constructor(private http: HttpService, private datePipe: DatePipe, private dataService: DataService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.http.getAllProductCategory().subscribe(responseData => {
      this.productCategory = responseData['data'];
    });
    this.http.getProductDetails(this.dataService.productId).subscribe(responseData => {
      this.product = responseData['data'];
    });
    console.log("product Id=" + this.dataService.productId);

  }

  selectImages(event) {
    // Array.from(event.target.files).forEach(element => {
    //   this.images.push(element);
    // });

    // for(const element of event.target.files){
    //   this.images.push(element);
    // }
    this.images = event.target.files;
  }

  saveProduct() {
    // this.product.startDateTime = new Date(this.product.startDateTime);
    // this.product.startDateTime.toLocaleString();


    // this.product.endDateTime = new Date(this.product.endDateTime);

    // this.product.endDateTime.toLocaleString();

    if (this.product.productCategoryId != null)
      this.product.productCategoryId = Number(this.product.productCategoryId);
    // const addProductForm = new AddProductService();
    // addProductForm.productId = 1;
    // addProductForm.product = this.product;
    // addProductForm.images = this.images;


    this.http.addUpdateProduct(this.product).subscribe(responseData => {
      this.snackbar.open(responseData['message'], "OK", { duration: 2000, });
      console.log(responseData['data']);
      this.saveImages(responseData['data']['id']);
      // console.log("response Received= " + responseData['message']);
    });

    // console.log("sent data=" + this.product.startDateTime);
    // this.http.addProduct(this.product).subscribe(responseData => {
    //   this.product = responseData['data'];
    //   console.log("received data=" + this.product);
    // })
    // console.log(this.product);
  }

  saveImages(productId: number) {
    console.log(productId);
    this.http.addUpdateImages(this.images, productId).subscribe(responseData => {
      console.log(responseData['message']);
    });

  }
}
