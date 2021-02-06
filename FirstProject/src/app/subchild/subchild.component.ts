import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})

export class SubchildComponent implements OnInit {

  check(){
    console.log("sub-child cheked")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
