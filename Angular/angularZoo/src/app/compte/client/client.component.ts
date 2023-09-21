import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Client} from 'src/app/model';
import { ClientHttpService } from './client-http.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  clientForm:FormGroup;
  showForm : boolean;
  submitted: boolean=false;
  constructor(private clientHttpService : ClientHttpService ,private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
     
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
  list(): Array<Client> {
    return this.clientHttpService.findAll();
  }
  add(){   
    this.clientForm.reset();
    this.showForm = true;}
 
  edit(id:number){
    this.clientHttpService.findById(id).subscribe(response => {
      this.clientForm.patchValue(response);
      this.showForm = true;
    })
}
  remove(id:number){
    this.clientHttpService.deleteById(id);
  }

 save() {
    this.clientForm.patchValue({type:"client"});
    this.clientHttpService.save(this.clientForm.value);
 this.submitted=true;
   this.showForm=false;
   console.log("saved")
 }

 cancel() {
   this.showForm = false;
   this.clientForm.reset();
  }
}



