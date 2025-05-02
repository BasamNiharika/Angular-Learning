import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentals',
  imports: [],
  templateUrl: './fundamentals.component.html',
  styleUrl: './fundamentals.component.css',
})
export class FundamentalsComponent {
  //Interpolation
  title1: string = 'title';
  title2 = undefined;
  isActive: Boolean = true;

  // Property Binding:
  // It is used with properties [id], [src], [href] etc.
  inputvalue: string = 'Hello';
  isDisabled: boolean = false;
  imgSrc = '/assets/Angular.jpg';
  /*  Explanation : In case of interpolation, we are passing isDisables value as false then also it is disabling input,
   reason is Interpolation treats all the data types including boolean values as strings. So here, it is converting 
   false to type string value (isDiabled = "false") making considering it has true value leading for disabling. */

  // Note: It is not recommended to use interpolation with properties
  //       Property binding is more reliable for non-binding strings like booleans

  //Event Binding (One Way Binding):
  Display() {
    alert('Click event is triggered');
  }
  count: number = 0;
  //Counter Example
  counter(type: string) {
    type === 'incr' ? this.count++ : this.count--; //here === is strict equality operator
  }
  //KeyBoard event
  onKeyPress() {
    alert('Key is presses');
  }
  // $event Object
  eventObject(e: any) {
    // by consoling this event object "e" it gives more information about keys pressed.
    console.log(e);
    // If you want to see the entered value in input i.e displayed through target.value
    console.log(e.target.value);
  }

  //Counter Example with Keyboard event
  keyCount: number = 0;
  onKeyPressed(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.keyCount++;
    } else if (event.key === 'ArrowDown') {
      this.keyCount--;
    }
  }
}
