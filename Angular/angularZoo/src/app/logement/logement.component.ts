import { Component, OnInit } from '@angular/core';
import { LogementHttpService } from './logement-http.service';
import { Logement } from '../model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit{

  logementForm?: Logement;

  logement$: Observable<Logement[]> | undefined;

  clients$: Observable<Client[]> | undefined;

constructor(private logementHttpService: LogementHttpService, private clientHttpService: ClientHttpService){
  
}

  
  ngOnInit(): void {
    this.logement$ = this.logementHttpService.findAll();
    this.clients$ = this.clientHttpService.findAllForAsync();
  }

  // list(): Array<Logement> {
  //   return this.logementervice.findAll();
  // }

  // listClient(): Array<Client> {
  //   return this.clientService.findAll();
  // }

  add() {
    this.logementForm = new Logement();
    this.logementForm.client = new Client();
  }

  edit(id: number) {
    this.logementHttpService.findById(id).subscribe(resp => {
      this.logementForm = resp;

      if(!this.logementForm.client) {
        this.logementForm.client = new Client();
      }
    });
  }

  // majClient(event: any) {
  //   if(!this.logementForm.client) {
  //     this.logementForm.client = new Client(event);
  //   }
  // }

  save() {  
    this.logementHttpService.save(this.logementForm).subscribe(resp => {
      this.logement$ = this.logementHttpService.findAll();
    });
  }

  cancel() {
    this.logementForm = null;
  }

  remove(id: number) {
    this.logementHttpService.deleteById(id).subscribe(resp => {
      this.logement$ = this.logementHttpService.findAll();
    });
  }

}


