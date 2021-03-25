import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/http.service';
import { DataService } from 'src/app//shared/data.service';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'startDateTime', 'endDateTime', 'noOfBids', 'maxPriceBidDone', 'action'];
  products: ProductService[] = [];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.http.getAllProducts().subscribe(responseData => {
      this.products = responseData['data'];
      // console.log(responseData);
      this.dataSource = new MatTableDataSource<ProductService>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  getProductDetail(id: string) {
    // alert("Product with ID=" + id + " clicked");
    this.dataService.productId = id;
    this.router.navigate(['dashboard/productDetails',id]);
  }

  editProductDetail(id: string) {
    // alert("Product with ID=" + id + " clicked");
    this.dataService.productId = id;
    this.router.navigate(['dashboard/addProduct',id]); 
  }
}
