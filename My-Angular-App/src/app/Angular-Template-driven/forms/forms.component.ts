import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [
    FormsModule,
    // TaskComponent,
    CommonModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  // user: { userName: string } = { userName: '' };
  // submitForm(myform: NgForm) {
  //   alert('Form submitted successfully!! check console');
  //   console.log(this.user);
  // }

  username: string = '';
  email: string = '';
  selectedCountry: string = '';
  selectedCity: string = '';

  countries = [
    { name: 'USA', value: 'usa' },
    { name: 'Australia', value: 'aus' },
    { name: 'UK', value: 'uk' },
  ];

  cities: { [key: string]: string[] } = {
    usa: ['New York', 'Los Angels', 'Chicago'],
    aus: ['Sydney', 'Melbourne', 'Brisbane'],
    uk: ['London', 'Manchestar', 'Birhingam'],
  };

  getCitiesByCountry(country:string){
    return this.cities[country]||[];
  }
  onSubmit(myform: NgForm) {
    if(myform.valid){
      const formData={
        user:this.username,
        email:this.email,
        country:this.selectedCountry,
        city:this.selectedCity
      };
      console.log('Form submitted',formData);
    }else{
      alert('please fill up the details...')
    }
  }
  
}
