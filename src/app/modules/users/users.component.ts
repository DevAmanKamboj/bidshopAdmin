import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/models/user.service';
import { HttpService } from 'src/app/http.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'emailId', 'phoneNumber', 'points', 'action'];
  user: UserService[] = [];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  }
  constructor(private http: HttpService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.http.getAllUser().subscribe(responseData => {
      this.user = responseData['data'];
      // console.log(responseData);
      this.dataSource = new MatTableDataSource<UserService>(this.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getUserDetail(id: string) {
    // alert("User with ID=" + id + " clicked");
    // sessionStorage.setItem('userId', id);
    this.dataService.userId = id;
    // console.log("after click=" + sessionStorage.getItem('userId'));
    this.router.navigate(['dashboard/userDetail']);
  }
}
