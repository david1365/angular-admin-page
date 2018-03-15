import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkWrapperComponent } from './dk-wrapper.component';

describe('DkWrapperComponent', () => {
  let component: DkWrapperComponent;
  let fixture: ComponentFixture<DkWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
