import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-str-child',
  templateUrl: './cd-str-child.component.html',
  styleUrls: ['./cd-str-child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CdStrChildComponent implements OnInit {
@Input() data !: any
check(){
  console.log("child cheked")
}
  constructor(private CdRef : ChangeDetectorRef) { }
refresh()
{   this.CdRef.detectChanges()
}
  ngOnInit(): void {
  }

}
