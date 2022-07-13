import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeev2Component } from './update-employeev2.component';

describe('UpdateEmployeev2Component', () => {
  let component: UpdateEmployeev2Component;
  let fixture: ComponentFixture<UpdateEmployeev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeev2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
