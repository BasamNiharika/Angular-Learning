import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  // *ngIf Directive
  display1: boolean = true;
  display2: boolean = false;

  // example
  num: number = 20;

  displayelement: boolean = false;
  show(): void {
    this.displayelement = !this.displayelement;
  }

  // *ngFor directive
  items1: string[] = ['Apple', 'Banana', 'Orange', 'Papaya']; //using index- ineffiecient bcoz reintializes list for every change

  items2 = [
    // using trackBy - effievient bcoz only updates the change
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 1, name: 'Papaya' },
  ];

  trackByItemId(item: any) {
    return item.id;
  }

  updateItem() {
    this.items2[1] = { id: 2, name: 'Grapes' };
  }

  // ngFor with nested Arrays
  matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  //ngSwitch
  person = {
    age: 18,
  };

  // Control Flow statements -- @for, @if
  employees = signal<empInterface[]>([
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'Role' },
    { id: 3, name: 'EmployeeC', role: 'Lead' },
  ]);

  //example: Age Validation functionality
  Age: number=0;
  isEligible: boolean =false;

  eligibilityCheck(){
    this.isEligible = this.Age>=18
  }
}
