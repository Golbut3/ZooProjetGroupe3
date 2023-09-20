import { TestBed } from '@angular/core/testing';

import { ChaletHttpService } from './chalet-http.service';

describe('ChaletHttpService', () => {
  let service: ChaletHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaletHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
