import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkVerticalActiveSubMenuComponent } from './dk-vertical-active-sub-menu.component';

describe('DkVerticalActiveSubMenuComponent', () => {
  let component: DkVerticalActiveSubMenuComponent;
  let fixture: ComponentFixture<DkVerticalActiveSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkVerticalActiveSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkVerticalActiveSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
