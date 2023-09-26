import { Injectable } from '@angular/core';
import { Reservation } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReservationHttpService {
  reservations: Array<Reservation> = new Array<Reservation>();
  apiReservationUrl: string = environment.apiUrl + "/reservation"
  constructor(private http: HttpClient) { 
    this.load();
  }
  load(): void {
    let obs: Observable<Reservation[]> = this.http.get<Reservation[]>(this.apiReservationUrl);

    obs.subscribe(resp => {
      this.reservations = resp;
    });
  }
  findAll() : Array<Reservation> {
    return this.reservations;
  }
  deleteById(id: number) {
    this.http.delete<void>(this.apiReservationUrl + "/"+id).subscribe(resp => {
      this.load();
    });
   }
   findById(id: number): Observable<Reservation> {
    let obs: Observable<Reservation> = this.http.get<Reservation>(this.apiReservationUrl + "/"+id);

    return obs;
  }
  save(reservation: Reservation): void{
    if(reservation.id) { // mise à jour
      this.http.put<Reservation>(this.apiReservationUrl + "/"+reservation.id, reservation).subscribe(resp => {
        this.load();
      });
    } else { // création
      console.log(reservation);
      this.http.post<Reservation>(this.apiReservationUrl, reservation).subscribe(resp => {
        this.load();
      });
    }
  }
}
