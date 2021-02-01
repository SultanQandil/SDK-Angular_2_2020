import { Component, DoCheck, Input, OnChanges, OnInit  , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit , OnChanges {
 y : any 
 x = {id :2}
 _data = ""
 @Input() // set and get with input decorator
 set data(d : string )
 {
   {
     this._data = d
   }
 }
 get data ()
 {
   return this._data
 }

 ngDoCheck (): void{
  console.log ("from on changes detection ")

} 
 ngOnInit(): void 
 {
    console.log("from ngInit")
 }


  constructor() 
  { 
    console.log ("from constructor ")
  }

  ngOnChanges(chang : SimpleChanges)
  {
    console.log (" change is : " , chang)
    
  }

  change(data : any) // view data of $event
  {
    console.log(data)
  }
}
