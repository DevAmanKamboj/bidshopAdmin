import { Component, Input, OnInit, ViewChild, AfterViewInit,OnChanges } from '@angular/core';
import { BidsService } from 'src/app/shared/models/bids.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-product-bids-tab',
  templateUrl: './product-bids-tab.component.html',
  styleUrls: ['./product-bids-tab.component.scss']
})
export class ProductBidsTabComponent implements OnInit,OnChanges {
  @Input() bids: BidsService[];
  displayedColumns: string[] = ['userId', 'bidTime', 'price', 'userName', 'action'];
  dataSource;
  //data: BidsService[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router, private dataService: DataService) { }

  ngOnChanges(): void {
    //console.log("after ngOnChanges=" + this.bids);
    this.dataSource = new MatTableDataSource<BidsService>(this.bids);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnInit(): void {
    // console.log("after ngOnInit=" + this.bids);
  }

  viewUserDetails(userId: string) {

    this.dataService.userId=userId;
    this.router.navigate(['dashboard/userDetail']);
  }

}
