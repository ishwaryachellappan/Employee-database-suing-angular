import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticOperationsComponent } from './arithmetic-operations.component';

describe('ArithmeticOperationsComponent', () => {
  let component: ArithmeticOperationsComponent;
  let fixture: ComponentFixture<ArithmeticOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmeticOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArithmeticOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
