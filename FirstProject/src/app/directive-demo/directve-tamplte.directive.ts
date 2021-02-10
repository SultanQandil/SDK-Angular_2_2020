import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectveTamplte]'
})
export class DirectveTamplteDirective {

  constructor(private ele: ElementRef) {
    //ele.nativeElement.innerHTML ="red "
    //ele.nativeElement.style.color='red'
   }
@HostListener ('mouseover') onMouseOver(){
  this.ele.nativeElement.style.background='gray'


}
@HostListener ('mouseleave') onMouseleave(){
  this.ele.nativeElement.style.background='white'


}
}
