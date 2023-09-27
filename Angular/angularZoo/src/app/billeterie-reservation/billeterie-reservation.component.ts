import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationHttpService } from '../reservation/reservation-http.service';
import { AuthService } from '../compte/auth.service';
import { Client, Reservation } from '../model';
import { ClientHttpService } from '../compte/client/client-http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billeterie-reservation',
  templateUrl: './billeterie-reservation.component.html',
  styleUrls: ['./billeterie-reservation.component.css']
})
export class BilleterieReservationComponent {
  resaForm : FormGroup;
  maResa : FormGroup;
  constructor(private clientHttpService : ClientHttpService, private reservationHttpService : ReservationHttpService, private authHttpService : AuthService,private formBuilder:FormBuilder){

  }
ngOnInit(): void {
    this.resaForm = this.formBuilder.group({
      
      prixEnfant:this.formBuilder.control(15),
      nombreEnfant: this.formBuilder.control(0),
      prixEnfantWE: this.formBuilder.control(25),
      nombreEnfantWE:this.formBuilder.control(0),
      prixEnfant1An: this.formBuilder.control(100),
      nombreEnfant1An: this.formBuilder.control(0),
      prixAdo:this.formBuilder.control(20),
      nombreAdo: this.formBuilder.control(0),
      prixAdoWE: this.formBuilder.control(30),
      nombreAdoWE:this.formBuilder.control(0),
      prixAdo1An: this.formBuilder.control(120),
      nombreAdo1An: this.formBuilder.control(0),
      prixAdulte:this.formBuilder.control(25),
      nombreAdulte: this.formBuilder.control(0),
      prixAdulteWE: this.formBuilder.control(35),
      nombreAdulteWE:this.formBuilder.control(0),
      prixAdulte1An: this.formBuilder.control(150),
      nombreAdulte1An: this.formBuilder.control(0),
      prixReduit:this.formBuilder.control(18),
      nombreReduit: this.formBuilder.control(0),
      prixReduitWE: this.formBuilder.control(27),
      nombreReduitWE:this.formBuilder.control(0),
      prixReduit1An: this.formBuilder.control(110),
      nombreReduit1An: this.formBuilder.control(0),
      dateDebut: this.formBuilder.control(''),
      dateFin: this.formBuilder.control(''),
      version:this.formBuilder.control('')
    });

    this.maResa=this.formBuilder.group({
      id: this.formBuilder.control(''),
      dateDebut:this.formBuilder.control(''),
      dateFin:this.formBuilder.control(''),
      nbVisiteur:this.formBuilder.control(''),
      prix:this.formBuilder.control(''),
      client:this.formBuilder.control(''),
      
      
      
      
    })
  }

  buildResa(){


  
    let nombreParticipant:number = parseInt(this.resaForm.value.nombreEnfant+ 
    this.resaForm.value.nombreEnfantWE+
    this.resaForm.value.nombreEnfant1An +
    this.resaForm.value.nombreAdo + 
    this.resaForm.value.nombreAdoWE +
    this.resaForm.value.nombreAdo1An+
    this.resaForm.value.nombreAdulte + 
    this.resaForm.value.nombreAdulteWE +
    this.resaForm.value.nombreAdulte1An +
    this.resaForm.value.nombreReduit + 
    this.resaForm.value.nombreReduitWE +
    this.resaForm.value.nombreReduit1An )

    this.maResa.value.nbVisiteur=nombreParticipant;
    console.log(this.resaForm.value.prixEnfant)
    let prix : number= (this.resaForm.value.nombreEnfant*this.resaForm.value.prixEnfant) + 
    (this.resaForm.value.nombreEnfantWE*this.resaForm.value.prixEnfantWE)+
    (this.resaForm.value.nombreEnfant1An*this.resaForm.value.prixEnfant1An)+
    (this.resaForm.value.nombreAdo*this.resaForm.value.prixAdo) + 
    (this.resaForm.value.nombreAdoWE*this.resaForm.value.prixAdoWE)+
    (this.resaForm.value.nombreAdo1An*this.resaForm.value.prixAdo1An)+
    (this.resaForm.value.nombreAdulte*this.resaForm.value.prixAdulte) + 
    (this.resaForm.value.nombreAdulteWE*this.resaForm.value.prixAdulteWE)+
    (this.resaForm.value.nombreAdulte1An*this.resaForm.value.prixAdulte1An)+
    (this.resaForm.value.nombreReduit*this.resaForm.value.prixReduit) + 
    (this.resaForm.value.nombreReduitWE*this.resaForm.value.prixReduitWE)+
    (this.resaForm.value.nombreReduit1An*this.resaForm.value.prixReduit1An)

    this.maResa.value.prix=prix;
    this.maResa.value.dateDebut=this.resaForm.value.dateDebut;
    this.maResa.value.dateFin=this.resaForm.value.dateFin;

    this.clientHttpService.findById(this.authHttpService.getUtilisateur().id).subscribe(
      response =>{
        this.maResa.value.client=response
        delete this.maResa.value.client.reservations
        this.reservationHttpService.save(this.maResa.value)
      }
    )

    //console.log(this.maResa.value)
    return this.maResa;
  }


  save(){
    this.buildResa();

  }
}