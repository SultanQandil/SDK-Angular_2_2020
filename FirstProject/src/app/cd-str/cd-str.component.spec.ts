import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdStrComponent } from './cd-str.component';

describe('CdStrComponent', () => {
  let component: CdStrComponent;
  let fixture: ComponentFixture<CdStrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdStrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
