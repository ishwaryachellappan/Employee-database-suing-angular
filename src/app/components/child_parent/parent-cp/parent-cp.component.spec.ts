import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCpComponent } from './parent-cp.component';

describe('ParentCpComponent', () => {
  let component: ParentCpComponent;
  let fixture: ComponentFixture<ParentCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
