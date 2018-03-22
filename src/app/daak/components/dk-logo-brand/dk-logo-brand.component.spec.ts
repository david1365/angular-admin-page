import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkLogoBrandComponent } from './dk-logo-brand.component';

describe('DkLogoBrandComponent', () => {
  let component: DkLogoBrandComponent;
  let fixture: ComponentFixture<DkLogoBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkLogoBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkLogoBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
