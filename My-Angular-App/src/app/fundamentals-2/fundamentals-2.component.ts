import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fundamentals-2',
  imports: [FormsModule],
  templateUrl: './fundamentals-2.component.html',
  styleUrl: './fundamentals-2.component.css',
})
export class Fundamentals2Component {
  //Static two way binding
  staticInput: string = 'Static two way binding';
  //dynamic two way binding
  dynamicInput: string = '';

  //Example: Simple Cart calculation
  NoOfItems: number = 0;
  priceOfItem: number = 300;
  totalPrice: number = 0;
  priceCalculation() {
    this.totalPrice = this.priceOfItem * this.NoOfItems;
  }
}
