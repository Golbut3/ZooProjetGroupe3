import { Component } from '@angular/core';
import { AuthService } from '../compte/auth.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.css']
})
export class BilleterieComponent {
  
constructor(protected authService : AuthService,private reservationHttpService : ReservationHttpService)
{}
sansLogement(){
  console.log(this.reservationHttpService.logementBool)
 this.reservationHttpService.logementBool=false;
}
avecLogement(){
  console.log(this.reservationHttpService.logementBool)
this.reservationHttpService.logementBool=true;
}
}