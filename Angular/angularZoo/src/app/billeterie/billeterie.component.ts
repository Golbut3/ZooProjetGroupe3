import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../compte/auth.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.css']
})
export class BilleterieComponent {
  survol: boolean = false; // Suivre si l'image est survolée

  // Références aux éléments du DOM
  @ViewChild('imageSurvolee') imageSurvolee: ElementRef;
  @ViewChild('imageAlternative1') imageAlternative1: ElementRef;

  constructor(protected authService: AuthService, private reservationHttpService: ReservationHttpService) { }

  sansLogement() {
    console.log(this.reservationHttpService.logementBool);
    this.reservationHttpService.logementBool = false;
  }

  avecLogement() {
    console.log(this.reservationHttpService.logementBool);
    this.reservationHttpService.logementBool = true;
  }

  // Fonction pour gérer l'événement de survol de la souris
  survolImage() {
    this.survol = true;
    // Masquer l'image de base
    this.imageSurvolee.nativeElement.style.display = 'none';
    // Afficher l'image alternative 1
    this.imageAlternative1.nativeElement.style.display = 'block';
  }

  // Fonction pour gérer l'événement de quitter le survol de la souris
  quitteImage() {
    this.survol = false;
    // Afficher à nouveau l'image de base
    this.imageSurvolee.nativeElement.style.display = 'block';
    // Masquer l'image alternative 1
    this.imageAlternative1.nativeElement.style.display = 'none';
  }
}
