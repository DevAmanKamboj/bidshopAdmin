import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/shared/models/product.service';
import { HttpService } from 'src/app/http.service';




@Component({
  selector: 'app-expired-products',
  templateUrl: './expired-products.component.html',
  styleUrls: ['./expired-products.component.scss']
})
export class ExpiredProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'startDateTime', 'endDateTime', 'noOfBids', 'maxPriceBidDone', 'action'];
  products: ProductService[] = [];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllExpiredProducts().subscribe(responseData => {
      this.products = responseData['data'];
      // console.log(responseData);
      this.dataSource = new MatTableDataSource<ProductService>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  getProductDetail(id: number) {
    alert("Product with ID=" + id + " clicked");
  }

}
