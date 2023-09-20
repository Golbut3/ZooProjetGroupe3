import { TestBed } from '@angular/core/testing';

import { CompteHttpService } from './compte-http.service';

describe('CompteHttpService', () => {
  let service: CompteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
