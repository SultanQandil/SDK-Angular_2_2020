import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-str-child',
  templateUrl: './cd-str-child.component.html',
  styleUrls: ['./cd-str-child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CdStrChildComponent implements OnInit {
@Input() data !: string
check(){
  console.log("child cheked")
}
  constructor() { }

  ngOnInit(): void {
  }

}
