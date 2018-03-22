import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkVerticalMenuComponent } from './dk-vertical-menu.component';

describe('DkVerticalMenuComponent', () => {
  let component: DkVerticalMenuComponent;
  let fixture: ComponentFixture<DkVerticalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkVerticalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
