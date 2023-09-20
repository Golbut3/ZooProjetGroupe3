import { Component, OnInit } from '@angular/core';
import { Animal, Enclos, Logement } from '../model';
import { Observable } from 'rxjs';
import { AnimalHttpService } from './animal-http.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit{

  animals$: Observable<Animal[]> | undefined;

  enclos$: Observable<Enclos[]> | undefined;
  logements$: Observable<Element[]> | undefined;

  animalForm: Animal = null;

  constructor(private animalHttpService: AnimalHttpService, private enclosHttpService: EnclosHttpService, private logementHttpService: LogementHttpService) {
  }
  
  ngOnInit(): void {
    this.animals$ = this.animalHttpService.findAll();
    this.enclos$ = this.enclosHttpService.findAllForAsync();
    this.logements$ = this.logementHttpService.findAllForAsync();
  }

  // list(): Array<Produit> {
  //   return this.produitService.findAll();
  // }

  // listFournisseur(): Array<Fournisseur> {
  //   return this.fournisseurService.findAll();
  // }

  add() {
    this.animalForm = new Animal();
    this.animalForm.enclos = new Enclos();
    this.animalForm.logement = new Logement();
  }

  edit(id: number) {
    this.animalHttpService.findById(id).subscribe(resp => {
      this.animalForm = resp;

      if(!this.animalForm.enclos && !this.animalForm.logement) {
        this.animalForm.enclos = new Enclos();
        this.animalForm.logement = new Logement();
      }
    });
  }

  // majFournisseur(event: any) {
  //   if(!this.produitForm.fournisseur) {
  //     this.produitForm.fournisseur = new Fournisseur(event);
  //   }
  // }

  save() {  
    this.animalHttpService.save(this.animalForm).subscribe(resp => {
      this.animals$ = this.animalHttpService.findAll();
    });
  }

  cancel() {
    this.animalForm;
  }

  remove(id: number) {
    this.animalHttpService.deleteById(id).subscribe(resp => {
      this.animals$ = this.animalHttpService.findAll();
    });
  }

