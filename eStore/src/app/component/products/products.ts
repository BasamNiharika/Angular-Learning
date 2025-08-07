import { Component } from '@angular/core';
import { ProductService } from './product-service';
import { ProductListItem } from './product.type';
import { CommonModule } from '@angular/common';
import { Ratings } from '../ratings/ratings';

@Component({
  selector: 'app-products',
  imports: [CommonModule,Ratings],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductService],
})
export class Products {
  products: ProductListItem[] = [];

  constructor(productService: ProductService) {
    this.products = productService.getAllProducts();
  }
}
