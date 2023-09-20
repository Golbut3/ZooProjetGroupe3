import { Injectable } from '@angular/core';
import { Reservation } from '../model';
import { ReservationHttpService } from './reservation-http.service';
import { CompteHttpService } from '../compte/compte-http.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations: Array<Reservation> = new Array<Reservation>();

  constructor(private reservationHttpService: ReservationHttpService) {
    this.reservations.push(new Reservation(2, "2023-02-23","2023-02-30", 4, 500));
    this.reservations.push(new Reservation(5, "2023-05-18","2023-02-30", 5, 520));
    this.reservations.push(new Reservation(9, "2023-06-12","2023-02-19", 2, 200));
   
   }

   findAll() : Array<Reservation> {
    return this.reservationHttpService.findAll();

    
   }

   findById(id: number) {
    return this.reservations.find(r => r.id == id);
   }

   deleteById(id: number) {
    let pos = this.reservations.findIndex(r=> r.id == id);
    this.reservations.splice(pos, 1);
   }
}
