import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Client, Interet, Logement, Reservation } from '../model';
import { ReservationHttpService } from './reservation-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InteretHttpService } from '../interet/interet-http.service';
import { ClientHttpService } from '../compte/client/client-http.service';
import { LogementHttpService } from '../logement/logement-http.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm!: FormGroup;
  showForm: boolean = false;
  interets: Array<Interet> = new Array<Interet>();
  clients: Array<Client> = new Array<Client>();
  logements: Array<Logement> = new Array<Logement>();

  //interet:Interet;
  constructor(private reservationHttpService: ReservationHttpService, private formBuilder: FormBuilder, private interetHttpService: InteretHttpService, private clientHttpService: ClientHttpService, private logementHttpService: LogementHttpService) {
    // this.interets.push(new Interet(1, null, null));
    // this.interets.push(new Interet(2, null, null));
    // this.interets.push(new Interet(3, null, null));
    // this.interets.push(new Interet(4, null, null));
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      dateDebut: this.formBuilder.control(''),
      dateFin: this.formBuilder.control(''),
      nbVisiteurs: this.formBuilder.control(''),
      prix: this.formBuilder.control(''),
      client: this.formBuilder.control(''),
      logement: this.formBuilder.control(''),
      interet: this.formBuilder.control(''),
      version: this.formBuilder.control('')
    });
  }
  list(): Array<Reservation> {
    return this.reservationHttpService.findAll();
  }
  edit(id: number) {
    console.log(id);
    this.interets = (this.interetHttpService.findAll());
    this.clients = (this.clientHttpService.findAll());
    this.logementHttpService.findAll().subscribe(resp => this.logements = resp);

    this.reservationHttpService.findById(id).subscribe(response => {
      this.reservationForm.patchValue(response);
      this.showForm = true;
      const selectedInteretId = response.interet ? response.interet.id : null;
      this.reservationForm.get('interet').setValue(selectedInteretId);
      const selectedClientId = response.client ? response.client.id : null;
      this.reservationForm.get('client').setValue(selectedClientId);
      const selectedLogementtId = response.logement ? response.logement.id : null;
      this.reservationForm.get('logement').setValue(selectedLogementtId);

    });

  }
  remove(id: number) {
    this.reservationHttpService.deleteById(id);
  }

  save() {
    let reservation: any = this.reservationForm.value; //On assigne les valeurs du reservationForm dans une variable : reservation
    if (!reservation.interet) { // Si on a pas d'interet dans la reservation, on met une valeur nulle dans la reservation (pas la peine de la rechercher via le http service)
      reservation.interet = null;

      if (!reservation.client) {  // Si on a pas de client dans la reservation, on met une valeur nulle dans la reservation
        reservation.client = null; 

        if (!reservation.logement) { // Si on a pas de client dans la reservation, on met une valeur nulle dans la reservation
          reservation.logement = null; 
          this.reservationHttpService.save(this.reservationForm.value); //Si interet, client et logement sont tous les 3 nuls, alors on peut sauvegarder la reservation.

        }
        else { //Sinon (si on a opas de client, pas d'interet, mais qu'on a un logement qui existe), on le recherche via le logementHttpService)

          this.logementHttpService.findById(reservation.logement).subscribe(response => {
            reservation.logement = response;
            this.reservationHttpService.save(this.reservationForm.value); //Puis on save la résa (qui aura donc un logement, mais un client null et un interet null)
          })

        }
      } ///////////////On continue ainsi pour traiter tous les cas possibles
      else {

        this.clientHttpService.findById(reservation.client).subscribe(response => {
          reservation.client = response;

        })
        if (!reservation.logement) {
          reservation.logement = null;
          this.reservationHttpService.save(this.reservationForm.value);

        }
        else {

          this.logementHttpService.findById(reservation.logement).subscribe(response => {
            reservation.logement = response;
            this.reservationHttpService.save(this.reservationForm.value);
          })

        }

      }
    }
    else {
      this.interetHttpService.findById(reservation.interet).subscribe(response => {
        reservation.interet = response;

        if (!reservation.client) {
          reservation.client = null;

          if (!reservation.logement) {
            reservation.logement = null;
            this.reservationHttpService.save(this.reservationForm.value);

          }
          else {

            this.logementHttpService.findById(reservation.logement).subscribe(response => {
              reservation.logement = response;
              this.reservationHttpService.save(this.reservationForm.value);
            })

          }
        }
        else {

          this.clientHttpService.findById(reservation.client).subscribe(response => {
            reservation.client = response;

          })
          if (!reservation.logement) {
            reservation.logement = null;
            this.reservationHttpService.save(this.reservationForm.value);

          }
          else {

            this.logementHttpService.findById(reservation.logement).subscribe(response => {
              reservation.logement = response;
              this.reservationHttpService.save(this.reservationForm.value);
            })

          }
        }

      })
    }

    this.showForm = false;

  }

  add() {
    this.reservationForm.reset();
    this.showForm = true;
    this.interets = (this.interetHttpService.findAll());
    this.clients = (this.clientHttpService.findAll());
    this.logementHttpService.findAll().subscribe(resp => this.logements = resp);

  }

  cancel() {
    this.showForm = false;
    this.reservationForm.reset();
  }


}