import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLightElement]',
})
export class HighLightElementDirective {

  //HostBinding
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor?: string;

  constructor() {
    this.bgColor = '#f2aa4cff';
    this.textColor = '#101820ff';
  }

  //HostListener
  @HostListener('click') onToggle(){
    if(this.bgColor === '#f2aa4cff'){
      this.bgColor = '#101820ff';
      this.textColor = '#f2aa4cff';
    }else{
      this.bgColor = '#f2aa4cff';
      this.textColor = '#101820ff';
    }
  }
}
