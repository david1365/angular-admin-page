import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkSearchComponent } from './dk-search.component';

describe('DkSearchComponent', () => {
  let component: DkSearchComponent;
  let fixture: ComponentFixture<DkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
