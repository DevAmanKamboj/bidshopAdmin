import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { HttpService } from 'src/app/http.service';



export class product {
  id: number;
  productName: string;
  price: string;
  minBidPrice: string;
  maxBidPrice: string;
  bidType: string;
  startDateTime: Date;
  endDateTime: Date;
  createdDateTime: Date;
  description: string;
  owner: string;
  productCategoryId: number;
  noOfBids: number;
  noOfViewers: number;
  winnerId: number;
  winnerName: string;
  winningPrice: number;
  winnerImageUrl: string;
  claimed: Boolean;
  properties: string;
  maxPriceBidDone: Boolean;

  constructor(id: number, productName: string, price: string, minBidPrice: string, maxBidPrice: string, bidType: string, startDateTime: Date, endDateTime: Date, createdDateTime: Date, description: string, owner: string, productCategoryId: number, noOfBids: number, noOfViewers: number, winnerId: number, winnerName: string, winningPrice: number, winnerImageUrl: string, claimed: Boolean, properties: string, maxPriceBidDone: Boolean) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.minBidPrice = minBidPrice;
    this.maxBidPrice = maxBidPrice;
    this.bidType = bidType;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.createdDateTime = createdDateTime;
    this.description = description;
    this.owner = owner;
    this.productCategoryId = productCategoryId;
    this.noOfBids = noOfBids;
    this.noOfViewers = noOfViewers;
    this.winnerId = winnerId;
    this.winnerName = winnerName;
    this.winningPrice = winningPrice;
    this.winnerImageUrl = winnerImageUrl;
    this.claimed = claimed;
    this.properties = properties;
    this.maxPriceBidDone = maxPriceBidDone;
  }

}
@Component({
  selector: 'app-expired-products',
  templateUrl: './expired-products.component.html',
  styleUrls: ['./expired-products.component.scss']
})
export class ExpiredProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'startDateTime', 'endDateTime', 'noOfBids', 'maxPriceBidDone'];
  products: product[] = [];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllExpiredProducts().subscribe(responseData => {
      this.products = responseData['data'];
      // console.log(responseData);
      this.dataSource = new MatTableDataSource<product>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
