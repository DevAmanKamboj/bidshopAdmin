import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { BidsService } from 'src/app/shared/models/bids.service';

import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/shared/models/product.service';


@Component({
  selector: 'app-winning-products-tab',
  templateUrl: './winning-products-tab.component.html',
  styleUrls: ['./winning-products-tab.component.scss']
})
export class WinningProductsTabComponent implements OnInit {
  @Input() products: ProductService[];
  displayedColumns: string[] = ['id', 'bidType', 'winningPrice', 'action'];
  dataSource;
  data: BidsService[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    //console.log("after ngOnChanges=" + this.bids);
    this.dataSource = new MatTableDataSource<ProductService>(this.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
