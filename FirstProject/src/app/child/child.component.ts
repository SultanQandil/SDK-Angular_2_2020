import { Component  , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
 ChildTexBox :string = "" 
@Input() dataInChild :string ="";
@Output() passToparent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

 passtoParentEmit()
   {
     this.passToparent.emit(this.ChildTexBox)
   }
 

}
