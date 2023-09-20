import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from '../model';
import { ReservationHttpService } from './reservation-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteHttpService } from '../compte/compte-http.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm!: FormGroup;
  showForm:boolean=false;
  constructor(private reservationService: ReservationService, private reservationHttpService: ReservationHttpService,private formBuilder: FormBuilder ,public compteHttpService: CompteHttpService) {
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
      interet: this.formBuilder.control('')
    });
  }
  list(): Array<Reservation> {
    return this.reservationHttpService.findAll();
  }
  edit(id: number) {
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