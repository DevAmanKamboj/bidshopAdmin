import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/http.service';

import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-active-products',
  templateUrl: './active-products.component.html',
  styleUrls: ['./active-products.component.scss']
})
export class ActiveProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'startDateTime', 'endDateTime', 'noOfBids', 'maxPriceBidDone', 'action'];
  products: ProductService[] = [];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.getAllActiveProducts().subscribe(responseData => {
      this.products = responseData['data'];
      // console.log(responseData);
      this.dataSource = new MatTableDataSource<ProductService>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  getProductDetail(id: number) {
    alert("Product with ID=" + id + " clicked");
    this.router.navigate(['dashboard/productDetails']);
  }
}
