import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InteretHttpService } from './interet-http.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';
import { Enclos, Interet, Reservation } from '../model';
import { EnclosHttpService } from '../enclos/enclos-http.service';

@Component({
  selector: 'app-interet',
  templateUrl: './interet.component.html',
  styleUrls: ['./interet.component.css']
})
export class InteretComponent {
  interetForm!: FormGroup;
  monInteretForm!: FormGroup;
  showForm:boolean=false;
  encloss: Array<Enclos> = new Array<Enclos>();
  constructor(private interetHttpService: InteretHttpService,private formBuilder: FormBuilder ,private reservationHttpService: ReservationHttpService, private enclosHttpService: EnclosHttpService,) {
}

ngOnInit(): void {
  this.interetForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    enclos1: this.formBuilder.control(''),
    enclos2: this.formBuilder.control(''),
    enclos3: this.formBuilder.control(''),
    enclos4: this.formBuilder.control(''),
    enclos5: this.formBuilder.control(''),
    reservation: this.formBuilder.control(''),
    version: this.formBuilder.control('')
   
  });

  this.monInteretForm=this.formBuilder.group({
    id:this.formBuilder.control(''),
    enclos:this.formBuilder.control(''),
    reservation:this.formBuilder.control(''),
    version: this.formBuilder.control('')

  })
}
buildInteret(){
  this.monInteretForm.value.id=this.interetForm.value.id;
 this.monInteretForm.value.version=this.interetForm.value.version;
  this.monInteretForm.value.reservation=this.interetForm.value.reservation;
 let  enclosToSave= new Array<Enclos>(null, null, null, null, null);

  this.enclosHttpService.findById(this.interetForm.value.enclos1).subscribe(response => {
    enclosToSave[0] = response;
    delete enclosToSave[0].animaux;
    delete enclosToSave[0].chalets;
    delete enclosToSave[0].interets;
    delete enclosToSave[0].interventions;
    
    

    this.enclosHttpService.findById(this.interetForm.value.enclos2).subscribe(response => {
      enclosToSave[1] = response;
      delete enclosToSave[1].animaux;
      delete enclosToSave[1].chalets;
      delete enclosToSave[1].interets;
      delete enclosToSave[1].interventions;
      this.enclosHttpService.findById(this.interetForm.value.enclos3).subscribe(response => {
        enclosToSave[2] = response;
        delete enclosToSave[2].animaux;
        delete enclosToSave[2].chalets;
        delete enclosToSave[2].interets;
        delete enclosToSave[2].interventions;
        this.enclosHttpService.findById(this.interetForm.value.enclos4).subscribe(response => {
          enclosToSave[3] = response;
          delete enclosToSave[3].animaux;
          delete enclosToSave[3].chalets;
          delete enclosToSave[3].interets;
          delete enclosToSave[3].interventions;
          this.enclosHttpService.findById(this.interetForm.value.enclos5).subscribe(response => {
            enclosToSave[4] = response;
            delete enclosToSave[4].animaux;
            delete enclosToSave[4].chalets;
            delete enclosToSave[4].interets;
            delete enclosToSave[4].interventions;
            this.monInteretForm.value.enclos=enclosToSave;
            if(this.monInteretForm.value.reservation){
              this.reservationHttpService.findById(this.interetForm.value.reservation).subscribe(response => {
                this.monInteretForm.value.reservation = response
                console.log( "on sauve ya si on a une resa en edit : ",this.monInteretForm.value);
                this.interetHttpService.save(this.monInteretForm.value); 
              });
              

            }
            else{
              this.monInteretForm.value.reservation = null;
              console.log("on sauve ça si on a pas de resa", this.monInteretForm.value);
              this.interetHttpService.save(this.monInteretForm.value); 
            }

            

          })
        })
      })
    })
  })

  this.showForm = false;





}
list(): Array<Interet> {
  return this.interetHttpService.findAll();
}
edit(id: number) {
 
  this.encloss=this.enclosHttpService.findAll();
  this.interetHttpService.findById(id).subscribe(response => {
    this.interetForm.patchValue(response);
    this.showForm = true;
    const selectedReservationtId = response.reservation ? response.reservation.id : null;
    this.interetForm.get('reservation').setValue(selectedReservationtId);
    this.monInteretForm.value.reservation=this.interetForm.value.reservation;
    console.log(this.interetForm.value.reservation);
    //Faire ça pour chaque element de la liste response.enclos
    for(let i=0;i<response.enclos.length;i++){
      const selectedLogementtId = response.enclos[i] ? response.enclos[i].id : null;
      let stringEnclos : string ="enclos"+(i+1);
      this.interetForm.get(stringEnclos).setValue(selectedLogementtId);
    }

  });
  
  }
remove(id: number) {
  this.interetHttpService.deleteById(id);
  }

  save(){
   
    this.buildInteret();


    }

  

  add(){
    this.interetForm.reset();
    this.showForm=true;
    this.encloss=this.enclosHttpService.findAll();
  }

  cancel() {
    this.showForm = false;
    this.interetForm.reset();
  }



}