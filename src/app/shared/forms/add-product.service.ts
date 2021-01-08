import { Injectable } from '@angular/core';
import { ProductService } from '../models/product.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  productId: number;
  product: ProductService;
  images: File[];

  constructor() { }
}
