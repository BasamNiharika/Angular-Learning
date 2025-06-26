import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { convertToUpperCase } from './uppercase';

@Component({
  selector: 'app-custom',
  imports: [ReactiveFormsModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  myform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myform = fb.group({
      username: ['', [Validators.required, convertToUpperCase]],
    });
  }

  submitForm() {
    console.log(this.myform.value);
  }
}
