import { Component } from '@angular/core';
import { CategoryService } from '../services/categoryService';
import { Category } from '../types/category';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  categories: Category[] = [];

  constructor(categoryService: CategoryService) {
    categoryService.getAllCategories().subscribe((categories) => (
      this.categories = categories.filter(
        (category) => category.parent_category_id === null
      )
    ));
    // console.log(this.categories);
  }
}
