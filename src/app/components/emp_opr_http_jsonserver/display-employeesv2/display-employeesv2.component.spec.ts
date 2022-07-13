import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeesv2Component } from './display-employeesv2.component';

describe('DisplayEmployeesv2Component', () => {
  let component: DisplayEmployeesv2Component;
  let fixture: ComponentFixture<DisplayEmployeesv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEmployeesv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEmployeesv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
