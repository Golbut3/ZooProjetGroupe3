import { Injectable } from '@angular/core';
import { Enclos } from '../model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnclosHttpService } from './enclos-http.service';

@Injectable({
  providedIn: 'root'
})
export class EnclosService {

  enclosForm: FormGroup;
  showForm:boolean = false;
  encloss:Array<Enclos> = new Array<Enclos>();

constructor(private enclosHttpService:EnclosHttpService, private formBuilder: FormBuilder) { 
    }

    ngOnInit(): void {
      this.enclosForm = this.formBuilder.group({
        // id: this.formBuilder.control(0),
        // nom: this.formBuilder.control('', Validators.required),
        // adresse: this.formBuilder.control('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        // responsable: this.formBuilder.control('')
      });
    }   

findAll(): Array<Enclos>
{
return this.encloss;
}

findById(id:number){
return this.encloss.find(e => e.id ==id);
}

save(enclos:Enclos):void{
if(enclos.id){
let pos = this.encloss.findIndex(enc => enc.id == enclos.id);
      this.encloss[pos] = enclos;
    } 
    else {
      let max = 0;
      this.encloss.forEach(e => {
        if(e.id > max) {
          max = e.id;
        }
      });

      enclos.id = ++max;

      this.encloss.push(enclos);
    }
  }
  deleteById(id: number) {
    let pos = this.encloss.findIndex(f => f.id == id);

    this.encloss.splice(pos, 1);
   }

}
