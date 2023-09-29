import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Animal, Chalet, Enclos, Interet } from '../model';
import { EnclosHttpService } from './enclos-http.service';
import { ChaletHttpService } from '../chalet/chalet-http.service';
import  {AnimalHttpService } from '../animal/animal-http.service';
import { InteretHttpService } from '../interet/interet-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InterventionHttpService } from '../intervention/intervention-http.service';
@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class EnclosComponent {

 
  enclosForm: FormGroup;
  showForm:boolean = false;
  showtype:Boolean =true;
  encloss$: Observable<Enclos[]>;

  animaux$: Observable<Animal[]>;

  chalets$: Observable<Chalet[]>;

  interets$:Observable<Interet[]>;
  animaux : Array<Animal>;
  chalets : Array<Chalet>;



  constructor(private enclosHttpService: EnclosHttpService, private chaletHtttpService: ChaletHttpService,private formBuilder: FormBuilder, private animauxHttpService :AnimalHttpService, private interventionHttpService: InterventionHttpService){
    // this.encloss$ = this.enclosHttpService.findAll()
    // this.chalets$ = this.chaletHtttpService.findAllForAsync()
    //this.animaux$ = this.animauxHttpService.findAllForAsync()
    // this.interets$= this.interetsHttpService.findAllForAsync()
  }

  ngOnInit():void{
    this.chalets = this.chaletHtttpService.findAll()
    this.animaux= this.animauxHttpService.findAll(); 
   this.enclosForm = this.formBuilder.group({
  id: this.formBuilder.control(''),
  capacite: this.formBuilder.control(''),
  type: this.formBuilder.control(''),
  version: this.formBuilder.control(''),
  active:this.formBuilder.control(''),

  });}
  
  list(): Array<Enclos> {
   
    return this.enclosHttpService.findAll();
  }
  list2(enc: Enclos): Array<Animal> {
   let animaux =this.animauxHttpService.findAll().filter(a => a.enclos.id == enc.id);
  return  animaux;
  }
 
  list3(): Array<Enclos> {
    let enclos = this.enclosHttpService.findAll()
  //Elimine les doublons
    let enclosunique = enclos.filter((obj, index) => enclos.findIndex((item) => item.type === obj.type) ===index );
    return enclosunique;}


  list4(): Array<Chalet> {
    console.log(this.chaletHtttpService.findAll())
      return this.chaletHtttpService.findAll();
  }
  


    add(){
    this.enclosForm.reset();
    this.showForm=true;
    this.showtype=true;
  }

  edit(id: number) {
    this.showForm=true;
    this.showtype=false;
    this.enclosHttpService.findById(id).subscribe(response => {
      this.enclosForm.patchValue(response);
      
    })
  };

  save(){
    this.enclosHttpService.save(this.enclosForm.value)
     
          }
    

  cancel(){
    this.showForm=false;
    this.enclosForm.reset();
  }

  remove(id:number){
    this.enclosHttpService.deleteById(id);

  }



}
