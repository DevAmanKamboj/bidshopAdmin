import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BidsService } from 'src/app/shared/models/bids.service';

import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-user-bids-tab',
  templateUrl: './user-bids-tab.component.html',
  styleUrls: ['./user-bids-tab.component.scss']
})
export class UserBidsTabComponent implements OnInit {

  @Input() bids: BidsService[];
  displayedColumns: string[] = ['productId', 'bidTime', 'price', 'action'];
  dataSource;
  //data: BidsService[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router:Router,private dataService:DataService) { }

  ngOnChanges(): void {
    //console.log("after ngOnChanges=" + this.bids);
    this.dataSource = new MatTableDataSource<BidsService>(this.bids);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnInit(): void {
    // console.log("after ngOnInit=" + this.bids);
  }
  // ngAfterViewInit(): void {
  //   console.log("after ngAfterViewInit=" + this.bids);
  // }
  // ngAfterContentInit(): void {
  //   console.log("after ngAfterContentInit=" + this.bids);
  // }

  getProductDetail(productId: string) {
    this.dataService.productId = productId;
    this.router.navigate(['dashboard/productDetails',productId]);
  }
}
