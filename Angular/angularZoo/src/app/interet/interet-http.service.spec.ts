import { TestBed } from '@angular/core/testing';

import { InteretHttpService } from './interet-http.service';

describe('InteretHttpService', () => {
  let service: InteretHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteretHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
