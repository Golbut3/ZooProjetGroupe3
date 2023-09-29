import { Component } from '@angular/core';
import { Compte, Employe, Enclos, Intervention } from '../model';
import { InterventionHttpService } from './intervention-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteHttpService } from '../compte/compte-http.service';
import { Observable } from 'rxjs';
import { EnclosHttpService } from '../enclos/enclos-http.service';
import { EmployeHttpService } from '../compte/employe/employe-http.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent {
  interventionForm!: FormGroup;
  showForm:boolean=false;

  enclos:Array <Enclos>;
  employes:Array <Employe>;


  constructor(private interventionHttpService: InterventionHttpService,private formBuilder: FormBuilder ,private enclosHttpService: EnclosHttpService,private employeHttpservice:EmployeHttpService) {
  }

  ngOnInit(): void {
    this.interventionForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      date: this.formBuilder.control(''),
     idEnclos: this.formBuilder.control(''),
      nomEmploye: this.formBuilder.control(''),
      version: this.formBuilder.control(''),
      active:this.formBuilder.control(''),
    });
  }
  list(): Array<Intervention> {
    return this.interventionHttpService.findAll();
  }

// list2(interv:Intervention):Array<Compte> {

//   let employe = this.compteHttpService.findAll().filter(emp => emp.nom==interv.employe.nom)

//   console.log(employe)
//   return employe;
// }
list2(interv:Intervention):Array<Employe>{
  let employe = this.employeHttpservice.findAll().filter(emp => emp.nom==interv.employe.nom)
  return employe
}

list3():Array<Enclos> {

  let enclos =  this.enclosHttpService.findAll()
  return enclos;
}

list4():Array<Employe>{
  let employe = this.employeHttpservice.findAll()
  return employe
}
  edit(id: number) {
    this.showForm = true;
    this.employes= this.employeHttpservice.findAll()
    this.enclos = this.enclosHttpService.findAll()
    this.interventionHttpService.findById(id).subscribe(response => {
      // let intervention:any = response
      // intervention.idEnclos =response.enclos?.id
      // intervention.nomEmploye =response.employe?.nom
      this.interventionForm.patchValue(response);

      const selectedEmploye = response.employe ? response.employe.nom :null;
      this.interventionForm.get('nomEmploye').setValue(selectedEmploye);
      const selectedEnclos = response.enclos ? response.enclos.id :null;
      this.interventionForm.get('idEnclos').setValue(selectedEnclos);
      
      console.log(response)
    });
    
    }
  remove(id: number) {
    this.interventionHttpService.deleteById(id);
    }

    save(){
      this.interventionHttpService.save(this.interventionForm.value);
      
    }

    add(){
      this.interventionForm.reset();
      this.showForm=true;
    }

    cancel() {
      this.showForm = false;
      this.interventionForm.reset();
    }


}