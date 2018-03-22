import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkPortalComponent } from './dk-portal.component';

describe('DkPortalComponent', () => {
  let component: DkPortalComponent;
  let fixture: ComponentFixture<DkPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
