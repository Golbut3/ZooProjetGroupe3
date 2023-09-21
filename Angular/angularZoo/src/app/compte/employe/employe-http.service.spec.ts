import { TestBed } from '@angular/core/testing';

import { EmployeHttpService } from './employe-http.service';

describe('EmployeHttpService', () => {
  let service: EmployeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
