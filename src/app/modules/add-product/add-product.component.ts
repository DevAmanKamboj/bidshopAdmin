import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
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

  constructor(private http: HttpService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.http.getAllProductCategory().subscribe(responseData => {
      this.productCategory = responseData['data'];
    })

  }

  saveProduct() {
    //new Date(this.product.startDate.getTime);
    // this.product.startDateTime = this.product.startDate.getTime + this.product.startTime.getTime;
    //  this.product.startDateTime = new Date(this.product.startDate.getFullYear(), this.product.startDate.getMonth(),this.product.startDate.getDay());
    // this.product.startDateTime= new Date (this.product.startDate.getTime + this.product.startTime.getTime;
    // console.log(this.product.startDate.getFullYear);
    // this.product.startDate = new Date(this.product.startDate);
    // this.product.startTime = new Date(this.product.startTime);
    // this.product.startDateTime=new Date(this.product.startDate.getFullYear(),this.product.startDate.getMonth(),this.product.startDate.getDay());
    // console.log(this.product.startDate.getTime());
    // this.product.startDateTime=new Date(this.product.startTime.getTime());
    this.product.startDateTime = new Date(this.product.startDateTime);
    this.product.startDateTime.toLocaleString();
    // this.datePipe.transform(this.product.startDateTime,'YYYY-MM-dd HH:mm:ss')

    this.product.endDateTime = new Date(this.product.endDateTime);
    //  this.datePipe.transform(this.product.endDateTime,'YYYY-MM-dd HH:mm:ss')
    this.product.endDateTime.toLocaleString();
    console.log("sent data=" + this.product.startDateTime);
    this.http.addProduct(this.product).subscribe(responseData => {
      this.product = responseData['data'];
      console.log("received data=" + this.product);
    })
    console.log(this.product);
  }


}
