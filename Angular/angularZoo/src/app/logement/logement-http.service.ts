import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LogementHttpService {
  
  logements: Array<Logement> = new Array<Logement>();
  url : string = "http://localhost:8080/api/logement"
  constructor(private http: HttpClient) {
    this.load()
  }
  load(): void {
    let obs: Observable<Logement[]> = this.http.get<Logement[]>(this.url);

    obs.subscribe(resp => {
      this.logements = resp;
      console.log("dans http",this.logements)
    });
}
  findAll() : Array<Logement> {
    console.log(this.logements);
    return this.logements;
    
  }

  findAllObs() : Observable<Logement[]> {
    console.log(this.logements);
    return this.http.get<Logement[]>(this.url);
    
  }

  findById(id: number): Observable<Logement> {
    let obs: Observable<Logement> = this.http.get<Logement>(this.url + "/"+id);
  
    return obs;
  }

  save(logement: Logement): void {

    if(logement.id) { // mise à jour
      this.http.put<Logement>(this.url + "/"+logement.id, logement).subscribe(resp => {
        this.load();
      });
    } else { // création
      this.http.post<Logement>(this.url, logement).subscribe(resp => {
        this.load();
      });
    }
   }
   deleteById(id: number) {
      this.http.delete<void>(this.url + "/"+id).subscribe(resp => {
        this.load()
   });
   }
}