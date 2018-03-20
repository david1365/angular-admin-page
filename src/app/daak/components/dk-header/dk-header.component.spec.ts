import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkHeaderComponent } from './dk-header.component';

describe('DkHeaderComponent', () => {
  let component: DkHeaderComponent;
  let fixture: ComponentFixture<DkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
