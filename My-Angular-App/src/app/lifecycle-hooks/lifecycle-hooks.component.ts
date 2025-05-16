import { Component } from '@angular/core';
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [TestComponent],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css',
})
export class LifecycleHooksComponent {
  constructor(){
    console.log('Constructor is called....')  //called first then ngOnInit
  }

  // ngOnchanges
  value: string = 'value2';
  updateValue(){
    this.value='Lifecycle component';
  }

  ngOnInit(){
    console.log('ngOnInit:Compoenent is called ');
  }

}
