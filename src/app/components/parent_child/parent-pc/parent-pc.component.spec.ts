import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPcComponent } from './parent-pc.component';

describe('ParentPcComponent', () => {
  let component: ParentPcComponent;
  let fixture: ComponentFixture<ParentPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
