import { Injectable } from '@angular/core';
import { BidsService } from './bids.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id: number;
  productName: string;
  price: number;
  minBidPrice: number;
  maxBidPrice: number;
  bidType: string;
  startDateTime: Date;
  endDateTime: Date;
  createdDateTime: Date;
  description: string;
  owner: string;
  productCategoryId: number;
  noOfBids: number;
  noOfViewers: number;
  winnerId: string;
  winnerName: string;
  winningPrice: number;
  winnerImageUrl: string;
  claimed: Boolean;
  properties: string;
  maxPriceBidDone: Boolean;
  bids: BidsService[];
  constructor() {
  }
}

