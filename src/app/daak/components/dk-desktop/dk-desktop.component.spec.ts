import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkDesktopComponent } from './dk-desktop.component';

describe('DkDesktopComponent', () => {
  let component: DkDesktopComponent;
  let fixture: ComponentFixture<DkDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
