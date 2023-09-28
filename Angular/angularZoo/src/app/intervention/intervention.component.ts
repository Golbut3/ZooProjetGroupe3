import { Component } from '@angular/core';
import { Compte, Enclos, Intervention } from '../model';
import { InterventionHttpService } from './intervention-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompteHttpService } from '../compte/compte-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent {
  interventionForm!: FormGroup;
  showForm:boolean=false;

  enclos$:Observable <Enclos[]>;
  employes$:Observable <Compte[]>;

  
  constructor(private interventionHttpService: InterventionHttpService,private formBuilder: FormBuilder ,public compteHttpService: CompteHttpService) {
  }

  ngOnInit(): void {
    this.interventionForm = this.formBuilder.group({
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
  list(): Array<Intervention> {
    return this.interventionHttpService.findAll();
  }
  edit(id: number) {
    this.interventionHttpService.findById(id).subscribe(response => {
      this.interventionForm.patchValue(response);
      this.showForm = true;
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