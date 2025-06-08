import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildDecoratorComponent } from '../child-decorator/child-decorator.component';
import { CommonModule } from '@angular/common';
import { HighLightElementDirective } from '../high-light-element.directive';

@Component({
  selector: 'app-parent-decorator',
  imports: [
    // ChildDecoratorComponent,
    HighLightElementDirective,
    CommonModule,],
  templateUrl: './parent-decorator.component.html',
  styleUrl: './parent-decorator.component.css',
})
export class ParentDecoratorComponent implements AfterViewChecked {
  //Input decorator
  displayMessage: string = 'Hello, Message from Parent Component.';
  showMsg() {
    this.displayMessage = 'updated display Message';
  }

  courses: { id: number; name: string }[] = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'Python' },
  ];

  //Output decorator
  message: string = '';

  receivedChildEvent(event: any) {
    this.message = event;
  }

  //output decorator Assignment
  itemArray: string[] = ['item 1', 'item 2', 'item 3'];

  addItem() {
    const newItem = `item ${this.itemArray.length + 1}`;
    this.itemArray.push(newItem);
  }

  deleteItem(index: number) {
    // this.message='deleted';
    if (index >= 0 && index < this.itemArray.length) {
      this.itemArray.splice(index, 1);
    }
  }

  //@viewChild decorator
  @ViewChild(ChildDecoratorComponent) child?: ChildDecoratorComponent; //Not recommeneded
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>; //It is better to use

  // constructor(){
  //   if (this.btnRef?.nativeElement) {
  //     this.btnRef.nativeElement.innerHTML = 'Counter ++';
  //   }
  // }

  incrementChildCounter() {
    console.log(this.child);
    this.child?.incrementCounter();
  }

  //When using ElementRef it is better to use ngAfterViewInit() lifecycle hook
  ngAfterViewChecked(): void {
    console.log('ngAfterViewInit called');
    if (this.btnRef?.nativeElement) {
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }


  //HostBinding using custom directive HighLightElementDirective
  //  hostBinding and HostListener - using both together we can add dynamism to the component properties.

  //HostListener - method decorator

}
