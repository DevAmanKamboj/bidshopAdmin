import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';
import { HttpService } from 'src/app/http.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { ProductCategoryService } from 'src/app/shared/models/product-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product = new ProductService();
  productCategory = new ProductCategoryService();
  constructor(private dataService: DataService, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.getProductDetails(this.dataService.productId).subscribe(responseData => {
      this.product = responseData['data'];
      this.http.getProductCategory(this.product.productCategoryId).subscribe(responseData => {
        this.productCategory = responseData['data'];
      });
    });
  }

  viewWinnerProfile() {
    this.dataService.userId = this.product.winnerId;
    this.router.navigate(['dashboard/userDetail']);
  }

}
