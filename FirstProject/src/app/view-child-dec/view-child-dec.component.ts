import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-view-child-dec',
  templateUrl: './view-child-dec.component.html',
  styleUrls: ['./view-child-dec.component.css']
})
export class ViewChildDecComponent implements OnInit {
@Input() title !: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
