import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-str',
  templateUrl: './cd-str.component.html',
  styleUrls: ['./cd-str.component.css']
})
export class CdStrComponent implements OnInit {
 names = ['sultan','farse','malak']
 addName(item :any){
   this.names.push(item)
   //this.names=[...this.names,item]
 }
 check(){
  console.log("parent cheked")
}
test(){
 
}
  constructor() { }

  ngOnInit(): void {
  }

}
