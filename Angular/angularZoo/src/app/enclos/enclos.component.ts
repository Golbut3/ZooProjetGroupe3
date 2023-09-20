import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chalet, Enclos } from '../model';
import { EnclosHttpService } from './enclos-http.service';
import { ChaletHttpService } from '../chalet/chalet-http.service';

@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class EnclosComponent {


  encloss$: Observable<Enclos[]>

  // animaux$: Observable<Animal[]>;

  chalets$: Observable<Chalet[]>;

  enclosForm: Enclos = new Enclos;

  constructor(private enclosHttpService: EnclosHttpService, private chaletHtttpService: ChaletHttpService){
     
  }

  ngOnInit():void{
this.encloss$ = this.enclosHttpService.findAll();
this.chalets$ = this.chaletHtttpService.findAll();

  }
  
  add(){}

  edit(){}

  save(){}

  cancel(){}

  remove(){}


}
