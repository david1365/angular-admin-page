import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkUserDetailsComponent } from './dk-user-details.component';

describe('DkUserDetailsComponent', () => {
  let component: DkUserDetailsComponent;
  let fixture: ComponentFixture<DkUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
