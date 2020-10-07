import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id: number;
  productName: string;
  price: string;
  minBidPrice: string;
  maxBidPrice: string;
  bidType: string;
  startDateTime: Date;
  endDateTime: Date;
  createdDateTime: Date;
  description: string;
  owner: string;
  productCategoryId: number;
  noOfBids: number;
  noOfViewers: number;
  winnerId: number;
  winnerName: string;
  winningPrice: number;
  winnerImageUrl: string;
  claimed: Boolean;
  properties: string;
  maxPriceBidDone: Boolean;
  constructor() {
  }
}

