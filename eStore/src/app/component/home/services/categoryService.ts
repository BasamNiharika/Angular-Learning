import { Injectable } from '@angular/core';
import { Category } from '../types/category';
import { categories } from '../sampleData/category.data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories():Category[]{
    console.log(categories);
    return categories;
  }
}
