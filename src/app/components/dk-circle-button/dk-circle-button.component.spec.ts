import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkCircleButtonComponent } from './dk-circle-button.component';

describe('DkCircleButtonComponent', () => {
  let component: DkCircleButtonComponent;
  let fixture: ComponentFixture<DkCircleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkCircleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
