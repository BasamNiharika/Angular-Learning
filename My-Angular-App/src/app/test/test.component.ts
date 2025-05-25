import { JsonPipe } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ElementRef,
  ViewChild,
  ContentChild,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [
    // JsonPipe
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent
  implements
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // ngOnChanges hook
  @Input() inputValue: string = '';
  previousValue: string | undefined;
  currentValue: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges is called...');
    if (changes['inputValue']) {
      this.previousValue = changes['inputValue'].previousValue;
      this.currentValue = changes['inputValue'].currentValue;
    }
    if (changes['user']) {
      console.log('user changed');
    }
    console.log(changes);
  }

  //ngDoCheck hook
  @Input() user: any; //ngOnChanges won't detect changes when user.name changed inside lifecycle component so we use ngDoCheck()
  private previousUser: string | undefined;

  ngDoCheck(): void {
    if (this.user && this.user.name != this.previousUser) {
      this.previousUser = this.user.name;
      console.log('ngDoCheck called - value changed', this.user.name);
    }
    console.log('ngDoCheck called - value changed');
  }
  //Note: So here, ngDoCheck manually checks for the changes within the user object's name property.
  //   -> Never use ngOnChanges and ngDocheck together in the same component, it causes unwanted behaviour.

  //ngAfterContentInit hook
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() hook is invoked...');
    console.log('ngAfterContentInit() - wrapper', this.wrapper);
    console.log('ngAfterContentInit() - content', this.content);
  }

  //ngAfterContentChecked hook
  // It is mostly used for the tasks that involve checking and responding to the changes on the content projected
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() hook is called');
  }

  //ngAfterViewInit hook
  // It is  called after ngAfterContentChecked() hook is called
  ngAfterViewInit(): void {
    const divElement: HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'maroon';
    divElement.style.fontSize = '15px';
    divElement.style.fontWeight = '300';
    console.log('ngAfterViewInit() hook is called');
  }

  //ngAfterViewChecked hook
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() hook is called... ');
  }

  //ngOnDestroy hook
  ngOnDestroy(): void {
    console.log('ngDestroy() hook is called...');
  }
}
