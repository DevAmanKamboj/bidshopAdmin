import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  id: number;

  categoryName: string;

  image: string;

  product: ProductService[];

  productCount: number;

  activeProductCount: number;

  constructor() { }
}
