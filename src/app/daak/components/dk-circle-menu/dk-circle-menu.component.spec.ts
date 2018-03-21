import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkCircleMenuComponent } from './dk-circle-menu.component';

describe('DkCircleMenuComponent', () => {
  let component: DkCircleMenuComponent;
  let fixture: ComponentFixture<DkCircleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkCircleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkCircleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
