import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CouterComponent implements OnInit {

  stoped = false
  cunter = 0
  inrevalId : any 
  constructor() { }

  ngOnInit(): void {
    this.inrevalId = setInterval( ()=>{this.cunter++} , 1000)
  }
stopTimer (){
  clearInterval(this.inrevalId);
  this.stoped=true
}
}
