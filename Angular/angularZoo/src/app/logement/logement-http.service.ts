import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LogementHttpService {
  

  constructor(private http: HttpClient) {
    
  }

  findAll(): Observable<Logement[]> {
    return this.http.get<Logement[]>("http://localhost:8080/api/logement");
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
