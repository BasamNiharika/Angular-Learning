import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
  FormArray,
  FormBuilder
} from '@angular/forms';
import { Task1Component } from "../task1/task1.component";

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,
     Task1Component
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // Form Control
  // username = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(3),
  //   Validators.maxLength(10),
  // ]);
  //By this we keep track of the behaviour of the input field(value, validation status, error handling)
  //first parameter: initial value, second parameter: validators array

  // showValue(){
  //   console.log('value',this.username.value);
  //   console.log('validation status',this.username.valid);  //by default validation status is true
  //   console.log('validation status',this.username.errors);
  // }

  // Form Group  and pristine and dirty
  // myform:FormGroup;
  // constructor(){
  //   this.myform=new FormGroup({
  //     name: new FormControl('',Validators.required),
  //     email:new FormControl('',[Validators.required,Validators.email]),
  //     age: new FormControl('',[Validators.required,Validators.minLength(18)])
  //   });
  // }

  // submitForm(){
  //   const userAge=this.myform.get('age')?.value;
  //   if(userAge< 18){
  //     alert("Age should be 18 or older");
  //     return;
  //   }else if(this.myform.valid){
  //     console.log(this.myform.value);
  //   }
  // }

  // Form Array
  // employeeForm: FormGroup;

  // constructor() {
  //   this.employeeForm = new FormGroup({
  //     employees: new FormArray([]),
  //   });
  // }
  // //getter method
  // get employees(): FormArray {
  //   return this.employeeForm.get('employees') as FormArray;
  // }

  // AddEmployee() {
  //   const employeeGroup = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     job: new FormControl('', Validators.required),
  //   });
  //   this.employees.push(employeeGroup);
  // }

  // onSubmitForm() {
  //   if (this.employeeForm.invalid) {
  //     return;
  //   } else {
  //     console.log(this.employeeForm.value);
  //   }
  // }

  //Form Builder
  // employeeForm: FormGroup;

  // constructor( private fb:FormBuilder) {
  //   this.employeeForm = this.fb.group({
  //     employees: this.fb.array([]),
  //   });
  // }
  // //getter method
  // get employees(): FormArray {
  //   return this.employeeForm.get('employees') as FormArray;
  // }

  // AddEmployee() {
  //   const employeeGroup = this.fb.group({
  //     name: ['', Validators.required],
  //     job: ['', Validators.required],
  //   });
  //   this.employees.push(employeeGroup);
  // }

  // onSubmitForm() {
  //   if (this.employeeForm.invalid) {
  //     return;
  //   } else {
  //     console.log(this.employeeForm.value);
  //   }
  // }
}
