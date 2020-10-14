import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/models/user.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user = new UserService();
  o: Object;
  // let user: Users;
  constructor(private location: Location, private http: HttpService, private snackbar: MatSnackBar, private dataService: DataService) { }

  ngOnInit(): void {
    // this.http.getUserDetails(sessionStorage.getItem('userId')).subscribe(responseData => {
    //   this.user = responseData['data'];
    // });
    this.http.getUserDetails(this.dataService.userId).subscribe(responseData => {
      this.user = responseData['data'];
    });
  }

  ngOnDestroy(): void {
    console.log("onDestroy===" + this.user.name);
    // sessionStorage.removeItem('userId');
  }

  updateUser() {
    this.http.updateUser(this.user).subscribe(responseData => {
      const status = responseData['status'];
      if (status === "Success") {
        // console.log("updated successfully");
        this.snackbar.open("Updated Successfully !", "OK", { duration: 2000, });
      } else {
        // console.log("Error occurred");
        this.snackbar.open("Oops ! Error Occurred", "OK", { duration: 2000, });
      }
    });
  }

  blockUnBlockUser() {

    if (this.user.isActive) {
      this.user.isActive = false;
    } else {
      this.user.isActive = true;
    }
    this.http.updateUser(this.user).subscribe(responseData => {
      const status = responseData['status'];
      if (status === "Success") {
        console.log("updated successfully");
        if (this.user.isActive)
          this.snackbar.open("User has been UnBlocked !", "OK", { duration: 2000, });
        else
          this.snackbar.open("User has been Blocked for further bidding !", "OK", { duration: 2000, });
      } else {
        console.log("Error occurred");
        this.snackbar.open("Oops ! Error Occurred", "OK", { duration: 2000, });
      }
    });

  }
}
