import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userId: string;
  productId: string;

  constructor() { }
}
