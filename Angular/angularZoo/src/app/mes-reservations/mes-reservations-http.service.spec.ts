import { TestBed } from '@angular/core/testing';

import { MesReservationsHttpService } from './mes-reservations-http.service';

describe('MesReservationsHttpService', () => {
  let service: MesReservationsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesReservationsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
