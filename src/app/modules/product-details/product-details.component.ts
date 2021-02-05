import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';
import { HttpService } from 'src/app/http.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { ProductCategoryService } from 'src/app/shared/models/product-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product = new ProductService();
  productCategory = new ProductCategoryService();
  constructor(private dataService: DataService, private http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getProductDetails(this.route.snapshot.params['id']).subscribe(responseData => {
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.dataService.productId = null;
  }

}
