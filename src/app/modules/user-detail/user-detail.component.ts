import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export class Users {
  id: number;
  name: string;
  emailId: string;
  phoneNumber: string;
  points: number;
  gender: string;
  referralCode: string;

  referredCode: string;

  profilePictureUrl: string;

  emailIdVerified: Boolean;

  phoneNumberVerified: Boolean;

  isActive: Boolean;

  constructor() {
    // this.id = "";
    // this.name = name;
    // this.emailId = emailId;
    // this.phoneNumber = phoneNumber;
    // this.points = points;
    this.gender = "Not Available";
    // this.referralCode = referralCode;
    this.referredCode = "Not Available";
    // this.profilePictureUrl = profilePictureUrl;

  }
  // constructor(name: string) {
  //   this.name = name;

  // }
  // constructor(id: number, name: string, emailId: string, phoneNumber: string, points: number, gender: string, referralCode: string, referredCode: string, profilePictureUrl: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.emailId = emailId;
  //   this.phoneNumber = phoneNumber;
  //   this.points = points;
  //   this.gender = gender;
  //   this.referralCode = referralCode;
  //   this.referredCode = referralCode;
  //   this.profilePictureUrl = profilePictureUrl;
  // }
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user = new Users();
  o: Object;
  // let user: Users;
  constructor(private location: Location, private http: HttpService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    // this.user.name = "XYZ";
    // this.user.name = "Aman";
    // this.user.id = this.location.getState();

    // this.o = this.location.getState();
    // console.log("On Init==" + this.o['userId']);
    // console.log("On Init==" + this.location.getState()['userId']);

    // this.http.getUserDetails(this.location.getState()['userId']).subscribe(responseData => {
    //   this.user = responseData['data'];
    // });
    console.log("sesison user id===" + sessionStorage.getItem('userId'));
    this.http.getUserDetails(sessionStorage.getItem('userId')).subscribe(responseData => {
      this.user = responseData['data'];
    });


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("onDestroy===" + this.user.name);
    sessionStorage.removeItem('userId');
  }

  updateUser() {
    this.http.updateUser(this.user).subscribe(responseData => {
      const status = responseData['status'];
      if (status === "Success") {
        console.log("updated successfully");
        this.snackbar.open("Updated Successfully !", "OK", { duration: 2000, });
      } else {
        console.log("Error occurred");
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
