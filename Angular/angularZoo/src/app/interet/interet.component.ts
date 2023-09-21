import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InteretHttpService } from './interet-http.service';
import { ReservationHttpService } from '../reservation/reservation-http.service';
import { Interet } from '../model';

@Component({
  selector: 'app-interet',
  templateUrl: './interet.component.html',
  styleUrls: ['./interet.component.css']
})
export class InteretComponent {
  interetForm!: FormGroup;
  showForm:boolean=false;
  constructor(private interetHttpService: InteretHttpService,private formBuilder: FormBuilder ,public reservationHttpService: ReservationHttpService) {
}

ngOnInit(): void {
  this.interetForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    enclos: this.formBuilder.control(''),
    reservation: this.formBuilder.control(''),
   
  });
}
list(): Array<Interet> {
  return this.interetHttpService.findAll();
}
edit(id: number) {
  this.interetHttpService.findById(id).subscribe(response => {
    this.interetForm.patchValue(response);
    this.showForm = true;
  });
  }
remove(id: number) {
  this.interetHttpService.deleteById(id);
  }

  save(){
    this.interetHttpService.save(this.interetForm.value);

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