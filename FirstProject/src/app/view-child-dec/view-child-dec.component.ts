import { Component, OnInit , Input, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { SubchildComponent } from '../subchild/subchild.component';

@Component({
  selector: 'app-view-child-dec',
  templateUrl: './view-child-dec.component.html',
  styleUrls: ['./view-child-dec.component.css']
})
export class ViewChildDecComponent implements OnInit  , AfterContentInit{
  @ContentChild('sub') subchild ! : SubchildComponent
  @ContentChildren(SubchildComponent)  subchildren ! : QueryList< SubchildComponent>
  ngAfterContentInit(){
    console.log("in after contetnt  inint"  ,this.subchildren )
 
   }

@Input() title !: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
