import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkVerticalSubMenuComponent } from './dk-vertical-sub-menu.component';

describe('DkVerticalSubMenuComponent', () => {
  let component: DkVerticalSubMenuComponent;
  let fixture: ComponentFixture<DkVerticalSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkVerticalSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkVerticalSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
