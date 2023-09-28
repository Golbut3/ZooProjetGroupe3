import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientHttpService } from '../compte/client/client-http.service';
import { Client } from '../model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
 inscriptionForm:FormGroup;
 clientInscrit:Client;
 constructor(private clientHttpService : ClientHttpService ,private formBuilder: FormBuilder){
}

 ngOnInit(): void {
  this.inscriptionForm = this.formBuilder.group({
   
    type:this.formBuilder.control(''),
    id: this.formBuilder.control(''),
    login: this.formBuilder.control(''),
    password:this.formBuilder.control(''),
    nom: this.formBuilder.control(''),
    prenom: this.formBuilder.control(''),
    version:this.formBuilder.control(''),
    email:this.formBuilder.control(''),
    tel:this.formBuilder.control('')
  });
}

save(){
  this.inscriptionForm.patchValue({type:"client"});
  this.inscriptionForm.patchValue({id:null})
  this.clientInscrit=this.inscriptionForm.value;
  this.clientHttpService.save(this.clientInscrit)
  window.location.reload()
  
}

cancel() {
  this.inscriptionForm.reset();
 }

}
