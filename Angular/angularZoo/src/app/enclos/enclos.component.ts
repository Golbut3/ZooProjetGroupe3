import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal, Chalet, Enclos, Interet } from '../model';
import { EnclosHttpService } from './enclos-http.service';
import { ChaletHttpService } from '../chalet/chalet-http.service';
import  {AnimalHttpService } from '../animal/animal-http.service';
@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class EnclosComponent {


  encloss$: Observable<Enclos[]>;

  animaux$: Observable<Animal[]>;

  chalets$: Observable<Chalet[]>;

  enclosForm: Enclos = new Enclos();

  constructor(private enclosHttpService: EnclosHttpService, private chaletHtttpService: ChaletHttpService, private animauxHttpService :AnimalHttpService){
     
  }

  ngOnInit():void{
  this.encloss$ = this.enclosHttpService.findAll();
  this.chalets$ = this.chaletHtttpService.findAllForAsync();
  this.animaux$ = this.animauxHttpService.findAllForAsync();
  }
  
  add(){
    this.enclosForm = new Enclos();
    this.enclosForm.chalets = new Array <Chalet>();
    this.enclosForm.animaux = new Array<Animal>();
    //this.enclosForm.interets = new <Interet>();
  }

  edit(id: number) {
    this.enclosHttpService.findById(id).subscribe(resp => {
      this.enclosForm = resp;

      if(!this.enclosForm.chalets) {
        this.enclosForm.chalets = new Array<Chalet>();
      }

      if(!this.enclosForm.animaux){
          this.enclosForm.animaux = new Array<Animal>();
      }

      if(!this.enclosForm.animaux){
        this.enclosForm.interets = new Array<Interet>();
    }

    });
  }

  save(){this.enclosHttpService.save(this.enclosForm).subscribe(resp => {
    this.encloss$ = this.enclosHttpService.findAll();
  });}

  cancel(){this.enclosForm = new Enclos(0);
  }

  remove(id:number){
    this.enclosHttpService.deleteById(id).subscribe(resp => {
      this.encloss$ = this.enclosHttpService.findAll();
    });

  }



}
