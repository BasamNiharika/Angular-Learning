import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorator-assignment',
  imports: [],
  templateUrl: './decorator-assignment.component.html',
  styleUrl: './decorator-assignment.component.css',
})
export class DecoratorAssignmentComponent implements AfterViewInit {
  @ViewChild('colorInput') colorInput!: ElementRef;
  @HostBinding('style.backgroundColor') selectedColor!: string;
  @HostListener('input',['$event.target.value']) onColorChange(color:string){
    this.selectedColor=color;
  }

  ngAfterViewInit(): void {
    this.selectedColor=this.colorInput.nativeElement.value;
  }
}
