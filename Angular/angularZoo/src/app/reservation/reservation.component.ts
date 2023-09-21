import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Interet, Reservation } from '../model';
import { ReservationHttpService } from './reservation-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteHttpService } from '../compte/compte-http.service';
import { InteretHttpService } from '../interet/interet-http.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm!: FormGroup;
  showForm:boolean=false;
  interets: Array<Interet> = new Array<Interet>();
  constructor(private reservationHttpService: ReservationHttpService,private formBuilder: FormBuilder, public interetHttpService: InteretHttpService ) {
  this.interets.push(new Interet(1, null, null));
  this.interets.push(new Interet(2, null, null));
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
    this.reservationHttpService.findById(id).subscribe(response => {
      this.reservationForm.patchValue(response);
      this.showForm = true;
    });
    }
  remove(id: number) {
    this.reservationHttpService.deleteById(id);
    }

    save(){
      this.reservationHttpService.save(this.reservationForm.value);
      console.log(this.reservationForm.value);
      this.showForm=false;

    }

    add(){
      this.reservationForm.reset();
      this.showForm=true;
    }

    cancel() {
      this.showForm = false;
      this.reservationForm.reset();
    }
    
  
}