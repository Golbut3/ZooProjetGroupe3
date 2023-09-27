import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationHttpService } from '../reservation/reservation-http.service';
import { AuthService } from '../compte/auth.service';
import { Client, Enclos, Interet, Logement, Reservation } from '../model';
import { ClientHttpService } from '../compte/client/client-http.service';
import { HttpClient } from '@angular/common/http';
import { LogementHttpService } from '../logement/logement-http.service';
import { EnclosHttpService } from '../enclos/enclos-http.service';
import { InteretHttpService } from '../interet/interet-http.service';

@Component({
  selector: 'app-billeterie-reservation',
  templateUrl: './billeterie-reservation.component.html',
  styleUrls: ['./billeterie-reservation.component.css']
})
export class BilleterieReservationComponent {
  resaForm : FormGroup;
  maResa : FormGroup;
  logements: Array<Logement> = new Array<Logement>();
  enclos: Array<Enclos> = new Array<Enclos>();
  constructor(private clientHttpService : ClientHttpService, private reservationHttpService : ReservationHttpService, private authHttpService : AuthService,private formBuilder:FormBuilder,private logementHttpService: LogementHttpService,private enclosHttpService: EnclosHttpService, private interetHttpService: InteretHttpService){
    this.logementHttpService.findAllObs().subscribe(resp => this.logements=resp);
    this.enclosHttpService.findAllObs().subscribe(resp => this.enclos=resp);
   
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
      version:this.formBuilder.control(''),
      logement:this.formBuilder.control(''),
      interet1:this.formBuilder.control(''),
      interet2:this.formBuilder.control(''),
      interet3:this.formBuilder.control(''),
      interet4:this.formBuilder.control(''),
      interet5:this.formBuilder.control('')
    });

    this.maResa=this.formBuilder.group({
      id: this.formBuilder.control(''),
      dateDebut:this.formBuilder.control(''),
      dateFin:this.formBuilder.control(''),
      nbVisiteur:this.formBuilder.control(''),
      prix:this.formBuilder.control(''),
      client:this.formBuilder.control(''),
      logement:this.formBuilder.control(''),
      interet:this.formBuilder.control('')
      
  
    })

  
  }

  findMaxInteret():number{
    let max:number =0
    this.interetHttpService.findAll().forEach(interet =>{
      if(interet.id>max){
        max=interet.id+1
  }
 })
 return max
}

  buildResa(){

     let dateD=new Date(this.resaForm.value.dateDebut)
    let dateF=new Date(this.resaForm.value.dateFin)

  
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
    if(this.resaForm.value.logement){
      this.logementHttpService.findById(this.resaForm.value.logement).subscribe(resp =>
        {
          prix=prix+resp.prix*(dateF.getTime()-dateD.getTime())/(1000*3600*24)
          
          this.maResa.value.prix=prix;
        })
    }
   // (this.resaForm.value.logement.prix*(dateF.getTime()-dateD.getTime()))/(1000*3600*24)

    this.maResa.value.dateDebut=this.resaForm.value.dateDebut;
    this.maResa.value.dateFin=this.resaForm.value.dateFin;
    this.maResa.value.logement=this.resaForm.value.logement;
    let interetToSave: Array<Enclos> = new Array<Enclos>();
    //let interetToSave2 = new Interet;
    // interetToSave.push(this.resaForm.value.interet1);
    // interetToSave.push(this.resaForm.value.interet2);
    // interetToSave.push(this.resaForm.value.interet3);
    // interetToSave.push(this.resaForm.value.interet4);
    // interetToSave.push(this.resaForm.value.interet5);
    this.enclosHttpService.findById(this.resaForm.value.interet1).subscribe(resp=> {
      delete resp.chalets;
      delete resp.animaux;
      delete resp.interventions;
      delete resp.interets;
      interetToSave.push(resp)});
      this.enclosHttpService.findById(this.resaForm.value.interet2).subscribe(resp=> {
        delete resp.chalets;
        delete resp.animaux;
        delete resp.interventions;
        delete resp.interets;
        interetToSave.push(resp)});
        this.enclosHttpService.findById(this.resaForm.value.interet3).subscribe(resp=> {
          delete resp.chalets;
          delete resp.animaux;
          delete resp.interventions;
          delete resp.interets;
          interetToSave.push(resp)});
          this.enclosHttpService.findById(this.resaForm.value.interet4).subscribe(resp=> {
            delete resp.chalets;
            delete resp.animaux;
            delete resp.interventions;
            delete resp.interets;
            interetToSave.push(resp)});
            this.enclosHttpService.findById(this.resaForm.value.interet5).subscribe(resp=> {
              delete resp.chalets;
              delete resp.animaux;
              delete resp.interventions;
              delete resp.interets;
              interetToSave.push(resp)
              let interet = new Interet;
              interet.enclos=interetToSave;
              console.log("INTERET",interet);
      this.interetHttpService.save(interet);
              
            });

   //let idMax = this.interetHttpService.findAll().filter(i => i.id = )

    //interetToSave2.enclos=interetToSave;
    // interetToSave.push(null);
    // interetToSave.push(null);
    // interetToSave.push(null);
    // interetToSave.push(null);

    //this.maResa.value.interet=null;
    console.log("ya quequechose ?",interetToSave);


    this.clientHttpService.findById(this.authHttpService.getUtilisateur().id).subscribe(
      response =>{
        this.maResa.value.client=response
        delete this.maResa.value.client.reservations
        this.logementHttpService.findById(this.maResa.value.logement).subscribe(resp =>  {
          delete resp.reservations;
          this.maResa.value.logement=resp;
          
          this.interetHttpService.findById(this.findMaxInteret()).subscribe(resp =>
          {
            this.maResa.value.interet=resp
            delete this.maResa.value.interet.enclos;
            delete this.maResa.value.interet.reservation;
            this.reservationHttpService.save(this.maResa.value);
            console.log("saved");
          });

          
          
        });
        console.log(this.maResa.value);
        //this.reservationHttpService.save(this.maResa.value)
      }
    )

    //console.log(this.maResa.value)
    return this.maResa;
  }


  save(){
    
    this.buildResa();

  }
}
