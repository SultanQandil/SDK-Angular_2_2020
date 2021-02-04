import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SubchildComponent } from '../subchild/subchild.component';
import{ViewChildDecComponent}  from "../view-child-dec/view-child-dec.component"

@Component({
  selector: 'app-view-child-dec-parent',
  templateUrl: './view-child-dec-parent.component.html',
  styleUrls: ['./view-child-dec-parent.component.css']
})
export class ViewChildDecParentComponent implements OnInit , AfterViewInit {
  myTitle ="title"
@ViewChild('child'  ) child !: ViewChildDecComponent
@ViewChildren('children') childs !: QueryList<ViewChildDecComponent>
  constructor() { }

 ngAfterViewInit(){
   console.log("in after inint"  ,this.childs )
  }
  

  ngOnInit(): void {
   //console.log( "in init " ,this.childs )

  }

}
