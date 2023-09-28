import { Component, OnInit } from '@angular/core';
import { Animal, Enclos, Espece, Logement } from '../model';
import { Observable } from 'rxjs';
import { AnimalHttpService } from './animal-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EspeceHttpService } from '../espece/espece-http.service';
import { EnclosHttpService } from '../enclos/enclos-http.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animalForm!: FormGroup;
  showForm: boolean = false;

  especes: Array<Espece>;


  constructor(private animalHttpService: AnimalHttpService, private enclosHttpService: EnclosHttpService, private especeHttpService: EspeceHttpService, private formBuilder: FormBuilder) {
   }

  
  ngOnInit(): void {
    this.especes = this.especeHttpService.findAll()
    this.animalForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      nom: this.formBuilder.control(''),
      poids: this.formBuilder.control(''),
      idEspece: this.formBuilder.control(''),
      idEnclos: this.formBuilder.control(''),
      version: this.formBuilder.control(''),

    });

  }

  list():Array<Animal> {
    //console.log(this.especes)
    console.log(this.animalHttpService.findAll())
   return this.animalHttpService.findAll();
  }

  listEspece():Array<Espece>
{
  return this.especeHttpService.findAll();
}
  add() {
    this.animalForm.reset();
    this.showForm = true;
  }

  edit(id: number) {
    this.animalHttpService.findById(id).subscribe(resp => {
      let animal: any = resp;
      animal.idEnclos = resp.enclos?.id;
      animal.idEspece = resp.espece?.id;
      this.animalForm.patchValue(animal);
      this.showForm = true;
      console.log(animal);
    });
  }

  remove(id: number) {
    this.animalHttpService.deleteById(id); 
    this.especes = this.especeHttpService.findAll();
  }

  save() {  
    let animal: any = this.animalForm.value;

    if(animal.idEnclos && animal.idEspece) {
      this.enclosHttpService.findById(animal.idEnclos).subscribe(response=> {
        animal.enclos = response;
        //console.log(animal.idEspece)
        this.especeHttpService.findById(animal.idEspece).subscribe(response2=> {
          animal.espece = response2;
        this.animalHttpService.save(animal);
      } );
    })}
    else if(animal.idEnclos && !animal.idEspece) {
      this.enclosHttpService.findById(animal.idEnclos).subscribe(response=> {
        animal.enclos = response;
        this.animalHttpService.save(animal);
    })
  }
  else if(!animal.idEnclos && animal.idEspece) {
    this.especeHttpService.findById(animal.idEspece).subscribe(response2=> {
      animal.espece = response2;
    this.animalHttpService.save(animal);
  })
}
    else {
      this.animalHttpService.save(animal);
    }

   
   //this.especes=this.especeHttpService.findAll();
    }
  
  cancel() {
    this.showForm = false;
    this.animalForm.reset();
  }

}