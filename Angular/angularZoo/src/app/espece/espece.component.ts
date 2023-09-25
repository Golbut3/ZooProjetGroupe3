import { Component, OnInit } from '@angular/core';
import { EspeceHttpService } from './espece-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnclosHttpService } from '../enclos/enclos-http.service';
import { Animal, Espece } from '../model';
import { Observable } from 'rxjs';
import { AnimalHttpService } from '../animal/animal-http.service';

@Component({
  selector: 'app-espece',
  templateUrl: './espece.component.html',
  styleUrls: ['./espece.component.css']
})
export class EspeceComponent implements OnInit {

  especeForm!: FormGroup;
  showForm: boolean = false;


  constructor(private animalHttpService: AnimalHttpService, private especeHttpService: EspeceHttpService, private enclosHttpService: EnclosHttpService, private formBuilder: FormBuilder) {
   }

  
  ngOnInit(): void {
    this.especeForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      nom: this.formBuilder.control(''),
      idAnimaux: this.formBuilder.control(''),
      version: this.formBuilder.control(''),
    });
  }

  list():Array<Espece> {
   return this.especeHttpService.findAll();
  }

  //listFournisseur(): Array<Fournisseur> {
  //  return this.fournisseurService.findAll();
  //}

  add() {
    this.especeForm.reset();
    this.showForm = true;
    //this.especeForm.animaux = new Animal();

  }

  edit(id: number) {
    this.especeHttpService.findById(id).subscribe(resp => {
      this.especeForm.patchValue(resp);
      this.showForm = true;

    });
  }

  remove(id: number) {
    this.especeHttpService.deleteById(id);
  }

  save() {  
    //this.especeHttpService.save(this.especeForm.value);

    console.log(this.especeForm.value);
    let esp: any = this.especeForm.value;

    if(esp.animaux) {
      this.especeHttpService.findById(esp.animaux).subscribe(resp=> {
        esp.animaux = resp;
        this.especeHttpService.save(esp);
      } );
    }
    else 
        this.especeHttpService.save(esp);
       
        
       /* let esp: any = this.especeForm.value;
        

  // Si idAnimaux n'est pas vide, séparez les IDs en tableau
  if (esp.idAnimaux) {
    const ids = esp.idAnimaux.split(',').map((id: string) =>{
      const parsedId = parseInt(id.trim(), 10);
     } )
    
    
    // Utilisez les IDs pour récupérer les animaux associés
    this.especeHttpService.findAnimalsByIds(ids).subscribe(resp => {
      esp.animaux = resp;
      this.especeHttpService.save(esp);
    });
  } else {
    this.especeHttpService.save(esp);
  }*/
}

  cancel() {
    this.showForm = false;
    this.especeForm.reset();
  }

}