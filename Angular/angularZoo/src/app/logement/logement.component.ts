import { Component, OnInit } from '@angular/core';
import { LogementHttpService } from './logement-http.service';
import { Client, Logement } from '../model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientHttpService } from '../compte/client/client-http.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
// export class LogementComponent implements OnInit{

//   logementForm?: Logement;

//   logement$: Observable<Logement[]> | undefined;

//   clients$: Observable<Client[]> | undefined;
//   formBuilder: any;
//   reservationForm: any;

// constructor(private logementHttpService: LogementHttpService, private clientHttpService: ClientHttpService){
  
// }

// ngOnInit(): void {
//     this.logementForm = this.formBuilder.group({
//     id: this.formBuilder.control(0),
//     nbPlace: this.formBuilder.control(''),
//     prix: this.formBuilder.control(''),
//     numero: this.formBuilder.control(''),
//     description: this.formBuilder.control(''),
//     client: this.formBuilder.control(''),
//   });
// }


//    list(): Array<Logement> {
//     return this.logementHttpService.findAll(),
//    }

//   listClient(): Array<Client> {
//     return this.clientService.findAll();
//   }

//   add() {
//     this.logementForm = new Logement();
//     this.logementForm.client = new Client();
//   }

//   edit(id: number) {
//     this.logementHttpService.findById(id).subscribe(resp => {
//       this.logementForm = resp;

//       if(!this.logementForm.client) {
//         this.logementForm.client = new Client();
//       }
//     });
//   }

//   majClient(event: any) {
//     if(!this.logementForm.client) {
//       this.logementForm.client = new Client(event);
//     }
//   }

//   save() {  
//     this.logementHttpService.save(this.logementForm).subscribe(resp => {
//       this.logement$ = this.logementHttpService.findAll();
//     });
//   }

//   cancel() {
//     this.logementForm = null;
//   }

//   remove(id: number) {
//     this.logementHttpService.deleteById(id).subscribe(resp => {
//       this.logement$ = this.logementHttpService.findAll();
//     });
//   }

// }


