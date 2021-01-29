import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  id: number;
  imageUrl: string;
  productId: number;
  constructor() { }
}
