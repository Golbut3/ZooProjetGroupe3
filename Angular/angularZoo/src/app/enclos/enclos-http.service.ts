import { Injectable } from '@angular/core';
import { Animal, Chalet, Enclos, Interet } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnclosHttpService {

  encloss : Array<Enclos> = new Array<Enclos>;
  url : string = "http://localhost:8080/api/enclos"

constructor(private http: HttpClient) { 
this.load()
}

load(): void {
  let obs: Observable<Enclos[]> = this.http.get<Enclos[]>(this.url);

  obs.subscribe(resp => {
    this.encloss = resp;
    console.log(this.encloss)
  })}

 findAll(): Array<Enclos>{
  return this.encloss;
 }

 findAllObs() : Observable<Enclos[]> {
  console.log(this.encloss);
  return this.http.get<Enclos[]>(this.url);
  
}

 findById(id: number): Observable<Enclos> {

  let obs: Observable<Enclos> = this.http.get<Enclos>(this.url + "/"+id);
  return obs
}

save(enclos: Enclos): void {
  if(enclos.id) { // mise à jour
    this.http.put<Enclos>(this.url + "/"+enclos.id, enclos).subscribe(resp => {
      this.load();
    });
  } else { // création
    this.http.post<Enclos>(this.url, enclos).subscribe(resp => {
      this.load();
    });
  }
 }

 deleteById(id: number) {
  this.http.delete<void>(this.url + "/"+id).subscribe(resp => {
    this.load();
  });
 }

}


