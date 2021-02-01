import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class ParentComponent  {

  dataInparent : string ="";
  childTextBoxValueInparent :string="";
  updateinChildValu(e :any)
  {
    this.childTextBoxValueInparent = e
  }
  constructor() { }

 

}
