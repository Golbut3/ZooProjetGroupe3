import { Injectable } from '@angular/core';
import { Reservation } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationHttpService {
  reservations: Array<Reservation> = new Array<Reservation>();
  constructor(private http: HttpClient) { 
    this.load();
  }
  load(): void {
    let obs: Observable<Reservation[]> = this.http.get<Reservation[]>("http://localhost:8080/api/reservation");

    obs.subscribe(resp => {
      this.reservations = resp;
    });
  }
  findAll() : Array<Reservation> {
    return this.reservations;
  }
  deleteById(id: number) {
    this.http.delete<void>("http://localhost:8080/api/reservation" + "/"+id).subscribe(resp => {
      this.load();
    });
   }
   findById(id: number): Observable<Reservation> {
    let obs: Observable<Reservation> = this.http.get<Reservation>("http://localhost:8080/api/reservation" + "/"+id);

    return obs;
  }
  save(reservation: Reservation): void{
    if(reservation.id) { // mise à jour
      this.http.put<Reservation>("http://localhost:8080/api/reservation" + "/"+reservation.id, reservation).subscribe(resp => {
        this.load();
      });
    } else { // création
      this.http.post<Reservation>("http://localhost:8080/api/reservation", reservation).subscribe(resp => {
        this.load();
      });
    }
  }
}
