import { Component } from '@angular/core';

@Component({
  selector: 'app-logement-utilisateur',
  templateUrl: './logement-utilisateur.component.html',
  styleUrls: ['./logement-utilisateur.component.css']
})
export class LogementUtilisateurComponent {
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

import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../compte/auth.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';

export const fadeInOut = trigger('fadeInOut', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [
    style({ opacity: 0 }),
    animate(300)
  ]),
  transition('* => void', [
    animate(300, style({ opacity: 0 }))
  ])
]);
