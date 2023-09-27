import { Component } from '@angular/core';
import { ReservationHttpService } from '../reservation/reservation-http.service';
import { AuthService } from '../compte/auth.service';

@Component({
  selector: 'app-mes-reservations',
  templateUrl: './mes-reservations.component.html',
  styleUrls: ['./mes-reservations.component.css']
})
export class MesReservationsComponent {

  constructor(private reservationHttpService : ReservationHttpService, private authService:AuthService){

  }

  findResaClient(){
    let client = this.authService.getUtilisateur();
    let reservation=this.reservationHttpService.findAll();
    return reservation.filter(r => r.client.id == client.id)
  }
  edit(){}
  remove(){}
}
