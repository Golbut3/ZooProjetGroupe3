import { Component, OnInit } from '@angular/core';
import { Animal, Enclos, Logement } from '../model';
import { Observable } from 'rxjs';
import { AnimalHttpService } from './animal-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EspeceHttpService } from '../espece-http.service';
import { EnclosHttpService } from '../enclos/enclos-http.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animalForm!: FormGroup;
  showForm: boolean = false;

  constructor(private animalHttpService: AnimalHttpService, private enclosHttpService: EnclosHttpService, private especeHttpService: EspeceHttpService, private formBuilder: FormBuilder) {
   }

  
  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      nom: this.formBuilder.control(''),
      poids: this.formBuilder.control(''),
    });
  }

  list():Array<Animal> {
    console.log(this.animalHttpService.findAll())
   return this.animalHttpService.findAll();
  }

  add() {
    this.animalForm.reset();
    this.showForm = true;
  }

  edit(id: number) {
    this.animalHttpService.findById(id).subscribe(resp => {
      this.animalForm.patchValue(resp);
      this.showForm = true;
    });
  }

  // majFournisseur(event: any) {
  //   if(!this.produitForm.fournisseur) {
  //     this.produitForm.fournisseur = new Fournisseur(event);
  //   }
  // }

  remove(id: number) {
    this.animalHttpService.deleteById(id);
  }

  save() {  
    this.animalHttpService.save(this.animalForm.value);
  }

  cancel() {
    this.showForm = false;
    this.animalForm.reset();
  }

}