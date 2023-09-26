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
      console.log(this.logements)
    });
}
  findAll() : Array<Logement> {
    return this.logements;
  }

  findById(id: number): Observable<Logement> {
    return this.http.get<Logement>("http://localhost:8080/api/logement/"+id);
  }

  save(logement: Logement): Observable<Logement> {
    if(logement.id) { // mise à jour
      return this.http.put<Logement>("http://localhost:8080/api/logement/"+logement.id, logement);
    } else { // création
      return this.http.post<Logement>("http://localhost:8080/api/logement", logement);;
    }
   }

   deleteById(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/logement/"+id);
   }
}
