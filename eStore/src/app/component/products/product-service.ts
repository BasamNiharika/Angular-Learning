import { Injectable } from '@angular/core';
import { ProductListItem } from './product.type';
import { products } from './product.data';

@Injectable()
export class ProductService {
  constructor() { }

  getAllProducts():ProductListItem[]{
    return products;
  }
}
