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
}
list(): Array<Interet> {
  return this.interetHttpService.findAll();
}
edit(id: number) {
  this.enclosHttpService.findAll().subscribe(resp => this.encloss=resp);
  this.interetHttpService.findById(id).subscribe(response => {
    this.interetForm.patchValue(response);
    this.showForm = true;
    const selectedReservationtId = response.reservation ? response.reservation.id : null;
    this.interetForm.get('reservation').setValue(selectedReservationtId);
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
    let interet: any = this.interetForm.value;
    let interetToSave = new Interet;
    let reservationToSave: Reservation = this.interetForm.value.reservation;
    interetToSave.setReservation(reservationToSave);
    console.log("Celui ci : ",interetToSave);
     if (!interet.enclos1) { 
      interet.enclos = null; 

      //this.interetHttpService.save(this.interetForm.value); 
    }
    else {
      let enclosToSave = new Array<Enclos>(null, null, null, null, null);

      this.enclosHttpService.findById(interet.enclos1).subscribe(response => {
        enclosToSave[0] = response;
        this.enclosHttpService.findById(interet.enclos2).subscribe(response => {
          enclosToSave[1] = response;
          this.enclosHttpService.findById(interet.enclos3).subscribe(response => {
            enclosToSave[2] = response;
            this.enclosHttpService.findById(interet.enclos4).subscribe(response => {
              enclosToSave[3] = response;
              this.enclosHttpService.findById(interet.enclos5).subscribe(response => {
                enclosToSave[4] = response;
                this.reservationHttpService.findById(this.interetForm.value.reservation).subscribe(response => interetToSave.reservation = response);
                interetToSave.enclos=enclosToSave;
                console.log(interetToSave);
                this.interetHttpService.save(interetToSave); 

              })
            })
          })
        })
      })
      console.log(enclosToSave);
        

      }
      


    }

  

  add(){
    this.interetForm.reset();
    this.showForm=true;
  }

  cancel() {
    this.showForm = false;
    this.interetForm.reset();
  }



}