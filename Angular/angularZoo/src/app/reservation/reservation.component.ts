import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Client, Interet, Reservation } from '../model';
import { ReservationHttpService } from './reservation-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteHttpService } from '../compte/compte-http.service';
import { InteretHttpService } from '../interet/interet-http.service';
import { ClientHttpService } from '../compte/client/client-http.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm!: FormGroup;
  showForm:boolean=false;
  interets: Array<Interet> = new Array<Interet>();
  clients: Array<Client> = new Array<Client>();
  
  //interet:Interet;
  constructor(private reservationHttpService: ReservationHttpService,private formBuilder: FormBuilder, private interetHttpService: InteretHttpService , private clientHttpService: ClientHttpService) {
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
    this.reservationHttpService.findById(id).subscribe(response => {
      this.reservationForm.patchValue(response);
      this.showForm = true;
      const selectedInteretId = response.interet ? response.interet.id : null;
      this.reservationForm.get('interet').setValue(selectedInteretId);
      const selectedClientId = response.client ? response.client.id : null;
      this.reservationForm.get('client').setValue(selectedClientId);

    });

    }
  remove(id: number) {
    this.reservationHttpService.deleteById(id);
    }

    save(){
      let reservation : any = this.reservationForm.value;
       if(!reservation.interet){
         reservation.interet=null;
         


          if(!reservation.client){
           reservation.client=null;
           this.clientHttpService.save(this.reservationForm.value);
         }
         else{
          
          this.clientHttpService.findById(reservation.client).subscribe(response =>{
            reservation.client=response;
            console.log("ca entre ici",this.reservationForm.value);
            this.reservationHttpService.save(this.reservationForm.value);
          })
         }
       }
       else{
        this.interetHttpService.findById(reservation.interet).subscribe(response =>{
          reservation.interet=response;
          
          if(!reservation.client){
            reservation.client=null;
            this.clientHttpService.save(this.reservationForm.value);
          }
          else{
           
           this.clientHttpService.findById(reservation.client).subscribe(response =>{
             reservation.client=response;
             console.log("ca entre ici",this.reservationForm.value);
             this.reservationHttpService.save(this.reservationForm.value);
           })
          }



        })
       }

      this.showForm=false;

    }

    add(){
      this.reservationForm.reset();
      this.showForm=true;
      this.interets = (this.interetHttpService.findAll());
      this.clients = (this.clientHttpService.findAll());
    }

    cancel() {
      this.showForm = false;
      this.reservationForm.reset();
    }
    
  
}