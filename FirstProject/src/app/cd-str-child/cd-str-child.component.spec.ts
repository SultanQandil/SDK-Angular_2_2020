import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdStrChildComponent } from './cd-str-child.component';

describe('CdStrChildComponent', () => {
  let component: CdStrChildComponent;
  let fixture: ComponentFixture<CdStrChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdStrChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdStrChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
