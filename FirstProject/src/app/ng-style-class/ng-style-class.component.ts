import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-class',
  templateUrl: './ng-style-class.component.html',
  styleUrls: ['./ng-style-class.component.css']
})
export class NgStyleClassComponent implements OnInit {
  msg = "hi"
  getColor(city :string){
    switch(city){
      case "amman":
        return 'green'
      case "irbid":
        return 'orange'
      default:
        return 'red'
    }

  }
  customer : any[] =
  [
   {name : 'ahmad', city :'irbid'},
   {name : 'khaled', city :'amman'},
   {name : 'amal', city :'zarqaa'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
