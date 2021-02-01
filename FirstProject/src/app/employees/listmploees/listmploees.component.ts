import { Component, OnChanges, OnInit  , SimpleChanges} from '@angular/core';
import { from } from 'rxjs';
import {Employee} from'../../model/emplyee.model'

@Component({
  selector: 'app-listmploees',
  templateUrl: './listmploees.component.html',
  styleUrls: ['./listmploees.component.css']
})
export class ListmploeesComponent  implements OnInit 
{
 
  arrayIndex = 0 
 employeeToDispay : Employee[] = [{
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
   employee : Employee[] =[
  
    {
      id : 1,
      name : "sultan",
      gender  :'male',
      email :  "s@g.com" ,
      phone:   "112233" ,
      department :  "it" ,
      dateofBirth :  new Date("01/01/1999"),
      PattOfPhoto :  "assets/img/e1.png" , 
      hidden : false  
  
    } ,
    {
      id : 2,
      name : "fares",
      gender  :'male',
      email :  "s@g.com" ,
      phone:   "112233" ,
      department :  "it" ,
      dateofBirth :  new Date("01/01/1999"),
      PattOfPhoto :  "assets/img/e2.png" ,  
      hidden : false  

    } ,
    
  ]
  ngOnInit(){
    this.employeeToDispay[0] = this.employee[0]
  }
  next ()
{
  this.arrayIndex ++
  if(this.arrayIndex <=1)
  {
    this.employeeToDispay[0]= this.employee[this.arrayIndex]
  }
  else 
  {
    this.employeeToDispay[0]=this.employee[0]
    this.arrayIndex =0
  }
}



}
