import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [TestComponent],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css',
})
export class LifecycleHooksComponent implements AfterContentInit, DoCheck {
  constructor() {
    console.log('Constructor is called....'); //called first then ngOnInit
  }

  // ngOnchanges
  value: string = 'value2';
  updateValue() {
    this.value = 'Lifecycle component';
  }

  ngOnInit() {
    console.log('ngOnInit:Compoenent is called ');
  }

  //ngDoCheck hook
  user = {
    name: 'UserA',
  };
  changeUserName() {
    this.user.name = 'UserC';
  }

  //ngAFterContentInit hook
  dataFromParent: string = '';

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = 'Random Number:' + random;
  }

  //ngAfterContentInit hook
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit hook is invoked...');
  }

  //ngAfterViewInit hook
  ngDoCheck(): void {
    console.log('Do changes called from parent for ngAfterViewInit purpose');
  }

  //ngOnDestroy hook
  displayComponent: boolean = true;
  toggle(): void {
    this.displayComponent = !this.displayComponent;
  }
}
