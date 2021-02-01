import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDecParentComponent } from './view-child-dec-parent.component';

describe('ViewChildDecParentComponent', () => {
  let component: ViewChildDecParentComponent;
  let fixture: ComponentFixture<ViewChildDecParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildDecParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDecParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
