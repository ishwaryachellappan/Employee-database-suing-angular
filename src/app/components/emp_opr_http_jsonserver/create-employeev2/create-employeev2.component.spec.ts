import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeev2Component } from './create-employeev2.component';

describe('CreateEmployeev2Component', () => {
  let component: CreateEmployeev2Component;
  let fixture: ComponentFixture<CreateEmployeev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeev2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
