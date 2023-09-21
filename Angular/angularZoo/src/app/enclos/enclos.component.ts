import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal, Chalet, Enclos, Interet } from '../model';
import { EnclosHttpService } from './enclos-http.service';
import { ChaletHttpService } from '../chalet/chalet-http.service';
import  {AnimalHttpService } from '../animal/animal-http.service';
import { InteretHttpService } from '../interet/interet-http.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class EnclosComponent {

  enclosForm: FormGroup;
  showForm:boolean = false;
  encloss$: Observable<Enclos[]>;

  animaux$: Observable<Animal[]>;

  chalets$: Observable<Chalet[]>;

  interets$:Observable<Interet[]>


  enclosForm: Enclos = new Enclos();

  constructor(private enclosHttpService: EnclosHttpService, private chaletHtttpService: ChaletHttpService, private animauxHttpService :AnimalHttpService, private interetsHttpService:InteretHttpService){
     
  }

  ngOnInit():void{
  this.encloss$ = this.enclosHttpService.findAll();
  this.chalets$ = this.chaletHtttpService.findAllForAsync();
  this.animaux$ = this.animauxHttpService.findAllForAsync();
  }
  
  add(){
    this.enclosForm.reset();
    this.showForm=true
  }

  edit(id: number) {
    this.enclosHttpService.findById(id).subscribe(resp => {
      this.enclosForm.patchValue(resp);
      this.showForm=true;
    //   if(!this.enclosForm.chalets) {
    //     this.enclosForm.chalets = new Array<Chalet>();
    //   }

    //   if(!this.enclosForm.animaux){
    //       this.enclosForm.animaux = new Array<Animal>();
    //   }

    //   if(!this.enclosForm.animaux){
    //     this.enclosForm.interets = new Array<Interet>();
    // }

     });
  }

  save(){this.enclosHttpService.save(this.enclosForm).subscribe(resp => {
    this.encloss$ = this.enclosHttpService.findAll();
  });}

  cancel(){
    this.showForm=false;
    this.enclosForm.reset();
  }

  remove(id:number){
    this.enclosHttpService.deleteById(id);

  }



}
