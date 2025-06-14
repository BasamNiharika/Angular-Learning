import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule, FormsModule],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.css',
})
export class AngularPipesComponent {
  title: string = 'Example for Angular Pipes';
  showDate: Date = new Date(); //current date

  //implementing built in pipes:
  employees = [
    { name: 'user A', state: 'california', salary: 50000 },
    { name: 'user B', state: 'new-york', salary: 70000 },
    { name: 'user C', state: 'texas', salary: 65000 },
    { name: 'user D', state: 'london', salary: 40000 },
  ];

  // slice Pipe
  sliceArray = ['Item A', 'Item B', 'Item C', 'Item D'];

  // Number pipe
  pi: number = 3.1456;

  //Task- Pound to Kg converter
  weightInPounds: number = 0;
  weightInKilograms: number = 0;

  convert() {
    this.weightInKilograms = this.weightInPounds * 0.4535;
    console.log(this.weightInKilograms);
  }

  //json pipe

  userDetails = {
    name: 'user',
    email: 'user@gmail.com',
    address: {
      street: '23 Main street',
      city: 'las vegas',
      state: 'nevada',
      zip: 88901,
    },
  };

  //json pipe with table example
  showJson:boolean=false;
  students: { name: string; gender: string; Age: number }[] = [
    { name: 'user A', gender: 'Female', Age: 25 },
    { name: 'user B', gender: 'male', Age: 27 },
    { name: 'user C', gender: 'Female', Age: 28 },
  ];

  convertJSON(){
    this.showJson=true;
  }
}

