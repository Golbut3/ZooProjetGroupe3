import { Injectable } from '@angular/core';
import { Client, Reservation } from '../model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesReservationsHttpService {
  reservations: Array<Reservation> = new Array<Reservation>();
  apiReservationUrl: string = environment.apiUrl + "/reservations/mesReservation/id"
  idclient :number;
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
}
