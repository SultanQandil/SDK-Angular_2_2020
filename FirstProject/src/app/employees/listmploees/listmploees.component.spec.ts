import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmploeesComponent } from './listmploees.component';

describe('ListmploeesComponent', () => {
  let component: ListmploeesComponent;
  let fixture: ComponentFixture<ListmploeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmploeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmploeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
