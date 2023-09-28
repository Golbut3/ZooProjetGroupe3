import { Component, OnInit } from '@angular/core';
import { LogementHttpService } from './logement-http.service';
import { ClientHttpService } from '../compte/client/client-http.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Logement, Reservation } from '../model';
import { EnclosHttpService } from '../enclos/enclos-http.service';




@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})



export class LogementComponent implements OnInit {
  logements: Logement[];
  logementForm: FormGroup;
  showForm: boolean;
  submitted: boolean = false;

  constructor(
    private logementHttpService: LogementHttpService,
    private encloHttpService: EnclosHttpService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.logementForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      nbPlace: this.formBuilder.control(''),
      prix: this.formBuilder.control(''),
      numero: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      idEnclos: this.formBuilder.control(''),
      type: this.formBuilder.control(''),
      version: this.formBuilder.control(''),
    });
  }

  list() {
    console.log(this.logementHttpService.findAll());
    return this.logementHttpService.findAll();
  }

  add() {
    this.logementForm.reset();
    this.showForm = true;
  }

    edit(id:number){
        this.logementHttpService.findById(id).subscribe(response => {
          this.logementForm.patchValue(response);
          console.log(this.logementForm.value.version)
          this.showForm = true;
        })
    }

  save() {
    
    if(this.logementForm.value.type=="mobilHome"){
      delete this.logementForm.value.idEnclos
      console.log(this.logementForm.value)
    }
    let logement: any = this.logementForm.value;
    if (logement.idEnclos) {
      this.encloHttpService.findById(logement.idEnclos).subscribe(response => {
        logement.enclos = response;
        logement.reservations = new Array<Reservation>();
        this.logementHttpService.save(logement);
      });
    } else {
      logement.reservations = new Array<Reservation>();
      this.logementHttpService.save(logement);
    }
    this.submitted = true;
    this.showForm = false;
  }

  cancel() {
    this.showForm = false;
    this.logementForm.reset();
  }

  remove(id: number) {
    this.logementHttpService.deleteById(id);
  }
}

