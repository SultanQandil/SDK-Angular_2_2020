import { Component, OnInit  , Input, OnChanges ,SimpleChanges} from '@angular/core';

import {Employee} from'../model/emplyee.model'

@Component({
  selector: 'app-employ-display',
  templateUrl: './employ-display.component.html',
  styleUrls: ['./employ-display.component.css']
})
export class EmployDisplayComponent implements OnInit , OnChanges {

  @Input () employyToDisplay :Employee[] = [{
    id : 0,
    name : "",
    gender  :'',
    email :  "" ,
    phone:   "" ,
    department :  "" ,
    dateofBirth :  new Date("01/01/1999"),
    PattOfPhoto :  "" , 
    hidden : false  
  
   }]
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges ( change :SimpleChanges)
    {
    
      const current = <string>change.employyToDisplay.currentValue;
      console.log(current)
  } 
}
