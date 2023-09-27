import { Component } from '@angular/core';
import { Client, Reservation } from '../model';

import { MesReservationsHttpService } from './mes-reservations-http.service';
import { ClientHttpService } from '../compte/client/client-http.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';

@Component({
  selector: 'app-mes-reservations',
  templateUrl: './mes-reservations.component.html',
  styleUrls: ['./mes-reservations.component.css']
})
export class MesReservationsComponent {
  

  constructor(private mesReservationHttpService: ReservationHttpService, private clientHttpSevice : ClientHttpService) {
    
    }


    list(): Array<Client> {
   
      return this.clientHttpSevice.findAll();
    }
  // list2(id: number): Array<Reservation> {
  //   let clients= this.clientHttpSevice.findAll()

  //   // return this.mesReservationHttpService.findAll().filter(a => a.client.id===clients.id);
  // }

}
