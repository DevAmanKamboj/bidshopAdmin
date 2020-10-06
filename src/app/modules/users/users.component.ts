import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/http.service';


export class Users {
  id: number;
  name: string;
  emailId: string;
  phoneNumber: string;
  points: number;

  constructor(id: number, name: string, emailId: string, phoneNumber: string, points: number) {
    this.id = id;
    this.name = name;

    this.emailId = emailId;
    this.phoneNumber = phoneNumber;

    this.points = points;

  }
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'emailId', 'phoneNumber', 'points', 'action'];
  user: Users[] = [];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  }
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.getAllUser().subscribe(responseData => {
      this.user = responseData['data'];
      console.log(responseData);
      this.dataSource = new MatTableDataSource<Users>(this.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getUserDetail(id: string) {
    // alert("User with ID=" + id + " clicked");
    sessionStorage.setItem('userId', id);
    console.log("after click=" + sessionStorage.getItem('userId'));
    this.router.navigate(['dashboard/userDetail'], { state: { userId: id } });
  }

}
