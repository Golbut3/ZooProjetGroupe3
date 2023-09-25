import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Animal, Chalet, Enclos, Interet } from '../model';
import { EnclosHttpService } from './enclos-http.service';
import { ChaletHttpService } from '../chalet/chalet-http.service';
import  {AnimalHttpService } from '../animal/animal-http.service';
import { InteretHttpService } from '../interet/interet-http.service';
<<<<<<< Updated upstream
import { FormBuilder, FormGroup } from '@angular/forms';
=======
import { FormGroup } from '@angular/forms';
>>>>>>> Stashed changes
@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class EnclosComponent {

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  enclosForm: FormGroup;
  showForm:boolean = false;
  encloss$: Observable<Enclos[]>;

  animaux$: Observable<Animal[]>;

  chalets$: Observable<Chalet[]>;

  interets$:Observable<Interet[]>;
  animaux : Array<Animal>;
  chalets : Array<Chalet>


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

  constructor(private enclosHttpService: EnclosHttpService, private chaletHtttpService: ChaletHttpService,private formBuilder: FormBuilder, private animauxHttpService :AnimalHttpService, private interetsHttpService:InteretHttpService){
    // this.encloss$ = this.enclosHttpService.findAll()
    // this.chalets$ = this.chaletHtttpService.findAllForAsync()
    //this.animaux$ = this.animauxHttpService.findAllForAsync()
    // this.interets$= this.interetsHttpService.findAllForAsync()
  }

  ngOnInit():void{

  this.enclosForm = this.formBuilder.group({
  id: this.formBuilder.control(''),
  capacite: this.formBuilder.control(''),
  chalets: this.formBuilder.control(''),
  animaux: this.formBuilder.control('')
  });}
  
  list(): Array<Enclos> {
   
    return this.enclosHttpService.findAll();
  }
  list2(enc: Enclos): Array<Animal> {
   let animaux =this.animauxHttpService.findAll().filter(a => a.enclos.id == enc.id);
  return  animaux;
  }
  list3(): Array<Animal> {
  
   return  this.animauxHttpService.findAll();
   }
  add(){
    this.enclosForm.reset();
<<<<<<< Updated upstream
    this.showForm=true;
    
  }

  edit(id: number) {
    this.showForm=true;
    this.enclosHttpService.findById(id).subscribe(response => {
      this.enclosForm.patchValue(response);
      


      const selectedChaletId = response.chalets ? response.chalets: null;
      this.enclosForm.get('chalets').setValue(selectedChaletId);
      // const selectedClientId = response.client ? response.client.id : null;
      // this.reservationForm.get('client').setValue(selectedClientId);
      // if(!this.enclosForm.value.chalets) {
      //   this.enclosForm.value.chalets = new Array<Chalet>()};
  

      // if(!this.enclosForm.value.animaux){
      //     this.enclosForm.value.animaux = new Array<Animal>()};
      

      // if(!this.enclosForm.value.interets){
      //   this.enclosForm.value.interets = new Array<Interet>()};
    })
  };

  save(){
    let enclos : any = this.enclosForm.value;

    
=======
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
>>>>>>> Stashed changes

    }

  cancel(){
    this.showForm=false;
    this.enclosForm.reset();
  }

  remove(id:number){
    this.enclosHttpService.deleteById(id);

  }



}
