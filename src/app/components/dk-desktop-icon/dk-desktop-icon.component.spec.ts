import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkDesktopIconComponent } from './dk-desktop-icon.component';

describe('DkDesktopIconComponent', () => {
  let component: DkDesktopIconeComponent;
  let fixture: ComponentFixture<DkDesktopIconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkDesktopIconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkDesktopIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
