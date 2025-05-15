import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-2',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-2.component.html',
  styleUrl: './directives-2.component.css',
})
export class Directives2Component {
  // ngClass directive

  // style: any = 'style';  // when passing as [ngClass]="style"

  //case: changing colour of input box when user type in it
  hasText: boolean = false;
  textInput(e: any) {
    this.hasText = e.target.value !== '';
  }

  // toggle functionality
  mode: boolean = true;
  switchMode() {
    this.mode = !this.mode;
    // console.log(this.mode);
  }

  // ngStyle directive
  colorVal: string = 'navy';
  fontSize: string = '30px';
  isItalic: string = 'italic';
  //passing styles object to ngStyle
  applyVal = {
    color: 'darkgreen',
    'font-size': '30px',
    'font-weight': 'bold',
  };

  //case: changing colour of input box when user type in it
  name: string = '';

  //ng-template
  isAuthorized: boolean = true;
  // isAuthorized: boolean = false;
  // listItems: string[] = ['Item1', 'Item2', 'Item3', 'Item4'];
  listItems: string[] = [];

  //*ngTemplateOutlet structural variable

}
