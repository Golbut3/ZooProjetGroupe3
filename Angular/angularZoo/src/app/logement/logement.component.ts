import { Component, OnInit } from '@angular/core';
import { LogementHttpService } from './logement-http.service';
<<<<<<< HEAD

import { ClientHttpService } from '../compte/client/client-http.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Logement, Reservation } from '../model';
import { Observable } from 'rxjs';
import { EnclosHttpService } from '../enclos/enclos-http.service';
=======
import { Client, Logement } from '../model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientHttpService } from '../compte/client/client-http.service';
>>>>>>> Cynthiajpp

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
<<<<<<< HEAD
export class LogementComponent implements OnInit{

 logements : Logement[];
  logementForm: FormGroup;
  showForm : boolean;
  submitted: boolean=false;

constructor(private logementHttpService: LogementHttpService, private encloHttpService: EnclosHttpService, private formBuilder : FormBuilder){
  
}

ngOnInit(): void {
    this.logementForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    nbPlace: this.formBuilder.control(''),
    prix: this.formBuilder.control(''),
    numero: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    idEnclos:this.formBuilder.control(''),
    type:this.formBuilder.control(''),
    version:this.formBuilder.control(""),


  });
}


   list(){
    console.log(this.logementHttpService.findAll())
   return this.logementHttpService.findAll()

}



   add(){   
    this.logementForm.reset();
    this.showForm = true;}

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
    let logement:any=this.logementForm.value
    if(logement.idEnclos){
    this.encloHttpService.findById(logement.idEnclos).subscribe(response =>{
        logement.enclos=response  
        logement.reservations=new Array<Reservation>
        this.logementHttpService.save(logement)
    })  
  }
  else{
    logement.reservations=new Array<Reservation>
        this.logementHttpService.save(logement)
  }
    this.submitted=true;
    this.showForm=false;
  }

  cancel() {
    this.showForm = false;
    this.logementForm.reset();
  }

  remove(id: number) {
    this.logementHttpService.deleteById(id);

}
}
=======
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

>>>>>>> Cynthiajpp

