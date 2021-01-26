import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit , OnChanges , DoCheck{

 @Input() data : string ="";

 ngDoCheck (): void{
  console.log ("from on changes detection ")

} 
 ngOnInit(): void {
    console.log("from ngInit")
  }
  constructor() { 
    console.log ("from constructor ")
  }
  ngOnChanges():void{
    console.log ("from on changes ")
    
  }
  
}
