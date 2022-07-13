import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPcComponent } from './child-pc.component';

describe('ChildPcComponent', () => {
  let component: ChildPcComponent;
  let fixture: ComponentFixture<ChildPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
