import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCpComponent } from './child-cp.component';

describe('ChildCpComponent', () => {
  let component: ChildCpComponent;
  let fixture: ComponentFixture<ChildCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
