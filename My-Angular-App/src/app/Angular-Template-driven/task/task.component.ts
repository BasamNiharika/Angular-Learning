import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  onSubmitForm(myform: NgForm) {
    if (myform.valid) {
      const formValues = JSON.stringify(myform.value);
      console.log(myform.value);  //object
      alert('form submitted successfully !!');
      console.log(formValues); // JSON
      console.log(
        '%c Form submitted successfully !!',
        'color:green; font-weight: 400; font-size:15px'
      );
    } else {
      alert('please fill up the required fields');
    }
  }

  onReset(myform: NgForm) {
    myform.resetForm(); // It provides NgForm class which resets form to its initial state.
  }

  onClickDefault(myform: NgForm) {
    myform.resetForm({
      name: 'Default Name',
      email: 'defaultid@gmail.com',
    });
  }
}
