import { TestBed } from '@angular/core/testing';

import { EspeceHttpService } from './espece-http.service';

describe('EspeceHttpService', () => {
  let service: EspeceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspeceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
