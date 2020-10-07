import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  address: Object[];

  isActive: Boolean;



  constructor() {
    this.gender = "Not Available";
    this.referredCode = "Not Available";
  }
}



