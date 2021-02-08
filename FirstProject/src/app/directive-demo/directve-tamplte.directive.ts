import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectveTamplte]'
})
export class DirectveTamplteDirective {

  constructor(ele: ElementRef) {
    ele.nativeElement.innerHTML ="red"
   }

}
