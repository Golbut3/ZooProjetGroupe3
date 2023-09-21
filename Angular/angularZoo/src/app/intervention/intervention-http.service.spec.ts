import { TestBed } from '@angular/core/testing';

import { InterventionHttpService } from './intervention-http.service';

describe('InterventionHttpService', () => {
  let service: InterventionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
