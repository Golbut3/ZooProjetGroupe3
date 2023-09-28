import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CompteHttpService } from './compte-http.service';
import { Compte } from '../model';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {

  //compteForm:FormGroup;

  constructor(private compteHttpService : CompteHttpService){
  }
  list(): Array<Compte> {
    return this.compteHttpService.findAll();
  }

  add(){}
  edit(id:number){
  }
  remove(id:number){}
}
