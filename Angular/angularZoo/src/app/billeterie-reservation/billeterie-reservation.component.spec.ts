import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilleterieReservationComponent } from './billeterie-reservation.component';

describe('BilleterieReservationComponent', () => {
  let component: BilleterieReservationComponent;
  let fixture: ComponentFixture<BilleterieReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilleterieReservationComponent]
    });
    fixture = TestBed.createComponent(BilleterieReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
