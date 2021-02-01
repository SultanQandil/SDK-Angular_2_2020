import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDecComponent } from './view-child-dec.component';

describe('ViewChildDecComponent', () => {
  let component: ViewChildDecComponent;
  let fixture: ComponentFixture<ViewChildDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
