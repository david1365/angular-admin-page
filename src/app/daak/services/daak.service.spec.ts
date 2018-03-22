import { TestBed, inject } from '@angular/core/testing';

import { DaakService } from './daak.service';

describe('DaakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaakService]
    });
  });

  it('should be created', inject([DaakService], (service: DaakService) => {
    expect(service).toBeTruthy();
  }));
});
