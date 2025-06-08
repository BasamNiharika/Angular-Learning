import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  imports: [CommonModule],
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.css',
})
export class ChildDecoratorComponent implements AfterContentInit {
  // @Input decorator
  @Input() receiveMessage: string = '';
  @Input() showData: { id: number; name: string }[] = [];

  //output decorator
  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit('Event Emitted from child component');
  }

  //output decorator Asssigment
  @Input() items: string[] = [];
  @Output() deletedIndex = new EventEmitter();

  deleteIndex(index: number) {
    this.deletedIndex.emit(index);
  }

  //@ViewChild decorator
  count: number = 0;

  incrementCounter(): void {
    this.count++;
  }

  //@ContentChild decorator
  @ContentChild('showPara') pararef?: ElementRef;

  ngAfterContentInit(): void {
    const content=this.pararef?.nativeElement;
    content.style.fontStyle='Italic';
    content.style.fontWeight='350';
    content.style.color='#afeeee';
  }
}
