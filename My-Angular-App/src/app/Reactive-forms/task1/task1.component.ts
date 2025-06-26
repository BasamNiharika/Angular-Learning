import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-task1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css',
})
export class Task1Component {

  // Task 1
  // step: any = 1;

  // myform: FormGroup;
  // isSubmitted: boolean = false;

  // constructor(private fb: FormBuilder) {
  //   this.myform = this.fb.group({
  //     userDetails: this.fb.group({
  //       name: ['', Validators.required],
  //       email: ['', [Validators.required, Validators.email]],
  //       password: ['', Validators.required],
  //     }),
  //     additionalDetails: this.fb.group({
  //       mobile: ['', [Validators.required, Validators.maxLength(10)]],
  //       address: ['', Validators.required],
  //       gender: ['', Validators.required],
  //     }),
  //     feedback: this.fb.group({
  //       comments: [''],
  //     }),
  //   });
  // }

  // get userDetails() {
  //   return this.myform.get('userDetails') as FormGroup;
  // }
  // get additionalDetails() {
  //   return this.myform.get('additionalDetails') as FormGroup;
  // }

  // btnPrevious() {
  //   this.step -= 1;
  // }

  // btnNext() {
  //   const userDetailsGroup = this.myform.get('userDetails') as FormGroup;
  //   const additionalDetailsGroup = this.myform.get(
  //     'additionalDetails'
  //   ) as FormGroup;
  //   if (userDetailsGroup.invalid && this.step == 1) {
  //     console.log('sdd');
  //     return;
  //   }
  //   if (additionalDetailsGroup.invalid && this.step == 2) {
  //     return;
  //   }
  //   if (this.step < 3) {
  //     this.step += 1;
  //   }
  // }

  // submitForm() {
  //   if (this.myform.valid) {
  //     this.isSubmitted = true;
  //   }
  //   console.log(this.myform.value);
  // }

  //task 2
  passwordForm: FormGroup;
  constructor(private fb:FormBuilder){
    this.passwordForm=this.fb.group({
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[@$*&])(?!\s).*$/),
        ]
      ]
    })
  }

  submitForm(){
    if(this.passwordForm.valid){
      console.log('Form submitted');
    }
  }
}
