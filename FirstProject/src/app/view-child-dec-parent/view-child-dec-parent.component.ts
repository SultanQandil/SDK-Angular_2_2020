import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import{ViewChildDecComponent}  from "../view-child-dec/view-child-dec.component"

@Component({
  selector: 'app-view-child-dec-parent',
  templateUrl: './view-child-dec-parent.component.html',
  styleUrls: ['./view-child-dec-parent.component.css']
})
export class ViewChildDecParentComponent implements OnInit , AfterViewInit {
  myTitle ="title"
@ViewChild('Myview',{static :false , read:ElementRef  }) child !: ViewChildDecComponent
@ViewChildren('children') childs !: QueryList<ViewChildDecComponent>
  constructor() { }

 ngAfterViewInit(){
   console.log("in after inint"  ,this.childs.toArray() )
  }

  ngOnInit(): void {
   console.log( "in init " ,this.child )

  }

}
