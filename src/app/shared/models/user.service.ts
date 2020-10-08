import { Injectable } from '@angular/core';
import { AddressService } from './address.service';
import { BidsService } from './bids.service';
import { ProductService } from './product.service';

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

  isActive: Boolean;

  address: AddressService[];

  bids: BidsService[];

  product: ProductService[];

  constructor() {
    this.gender = "Not Available";
    this.referredCode = "Not Available";
  }
}



