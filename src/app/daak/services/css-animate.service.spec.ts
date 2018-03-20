import { TestBed, inject } from '@angular/core/testing';

import { CssAnimateService } from './css-animate.service';

describe('CssAnimateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CssAnimateService]
    });
  });

  it('should be created', inject([CssAnimateService], (service: CssAnimateService) => {
    expect(service).toBeTruthy();
  }));
});
