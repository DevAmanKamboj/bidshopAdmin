import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidsService {

  id: number;

  price: number;

  userId: number; /* foreign key from user table */

  productId: number; /* foreign key from product table */

  userName: string;

  winnerProfilePictureUrl: string;

  bidTime: Date;
  constructor() { }
}
