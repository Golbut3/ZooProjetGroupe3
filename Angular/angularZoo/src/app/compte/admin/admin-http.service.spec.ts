import { TestBed } from '@angular/core/testing';

import { AdminHttpService } from './admin-http.service';

describe('AdminHttpService', () => {
  let service: AdminHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
