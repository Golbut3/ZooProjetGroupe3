import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../compte/auth.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.css']
})
export class BilleterieComponent {
  survol1: boolean = false; // Suivre si l'image 1 est survolée
  survol2: boolean = false; // Suivre si l'image 2 est survolée

  // Références aux éléments du DOM
  @ViewChild('imageSurvolee1') imageSurvolee1: ElementRef;
  @ViewChild('imageAlternative1') imageAlternative1: ElementRef;

  @ViewChild('imageSurvolee2') imageSurvolee2: ElementRef;
  @ViewChild('imageAlternative2') imageAlternative2: ElementRef;

  constructor(protected authService: AuthService, private reservationHttpService: ReservationHttpService) { }

  sansLogement() {
    console.log(this.reservationHttpService.logementBool);
    this.reservationHttpService.logementBool = false;
  }

  avecLogement() {
    console.log(this.reservationHttpService.logementBool);
    this.reservationHttpService.logementBool = true;
  }

  // Fonction pour gérer l'événement de survol de l'image 1
  survolImage1() {
    this.survol1 = true;
    // Masquer l'image de base 1
    this.imageSurvolee1.nativeElement.style.display = 'none';
    // Afficher l'image alternative 1
    this.imageAlternative1.nativeElement.style.display = 'block';
  }

  // Fonction pour gérer l'événement de quitter le survol de l'image 1
  quitteImage1() {
    this.survol1 = false;
    // Afficher à nouveau l'image de base 1
    this.imageSurvolee1.nativeElement.style.display = 'block';
    // Masquer l'image alternative 1
    this.imageAlternative1.nativeElement.style.display = 'none';
  }

  // Fonction pour gérer l'événement de survol de l'image 2
  survolImage2() {
    this.survol2 = true;
    // Masquer l'image de base 2
    this.imageSurvolee2.nativeElement.style.display = 'none';
    // Afficher l'image alternative 2
    this.imageAlternative2.nativeElement.style.display = 'block';
  }

  // Fonction pour gérer l'événement de quitter le survol de l'image 2
  quitteImage2() {
    this.survol2 = false;
    // Afficher à nouveau l'image de base 2
    this.imageSurvolee2.nativeElement.style.display = 'block';
    // Masquer l'image alternative 2
    this.imageAlternative2.nativeElement.style.display = 'none';
  }
}
