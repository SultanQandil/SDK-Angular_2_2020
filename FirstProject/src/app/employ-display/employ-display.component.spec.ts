import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployDisplayComponent } from './employ-display.component';

describe('EmployDisplayComponent', () => {
  let component: EmployDisplayComponent;
  let fixture: ComponentFixture<EmployDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
