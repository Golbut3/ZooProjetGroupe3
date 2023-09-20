import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chalet, Enclos, Interet } from '../model';
import { EnclosHttpService } from './enclos-http.service';
import { ChaletHttpService } from '../chalet/chalet-http.service';

@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class EnclosComponent {


  encloss$!: Observable<Enclos[]>;

  //animaux$: Observable<Animal[]>;

  chalets$!: Observable<Chalet[]>;

  enclosForm: Enclos = new Enclos;

  constructor(private enclosHttpService: EnclosHttpService, private chaletHtttpService: ChaletHttpService){
     
  }

  ngOnInit():void{
this.encloss$ = this.enclosHttpService.findAll();
this.chalets$ = this.chaletHtttpService.findAll();

  }
  
  
  add(){
    this.enclosForm = new Enclos();
    this.enclosForm.chalets = new Chalet();
    //this.enclosForm.interets = new Interet ();
  }

  edit(id: number) {
    this.enclosHttpService.findById(id).subscribe(resp => {
      this.enclosForm = resp;

      if(!this.enclosForm.chalets) {
        this.enclosForm.chalets = new Chalet();
      }

      if
    });

  save(){}

  cancel(){}

  remove(){}


}
