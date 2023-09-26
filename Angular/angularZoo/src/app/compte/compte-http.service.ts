import { Injectable } from '@angular/core';
import { Compte } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteHttpService {

  comptes : Array<Compte> = new Array<Compte>;
  url : string = "http://localhost:8080/api/compte"

  constructor(private http: HttpClient) { 
    this.load();
  }

  load(): void {
    let obs: Observable<Compte[]> = this.http.get<Compte[]>(this.url);

    obs.subscribe(resp => {
      this.comptes = resp;
    });
}
findAll() : Array<Compte> {
  return this.comptes;
}

connexion(login: string, password: string):Compte {
  return this.comptes.find(c => c.login == login && c.password == password);
 }

}
