import { Injectable } from '@angular/core';
import { Enclos } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnclosHttpService {

  

encloss: Array<Enclos> = new Array <Enclos>();

constructor(private http: HttpClient) { 

}
 findAll(): Observable<Enclos[]>{

  return this.http.get<Enclos[]>("http://localhost:8080/enclos");
 }

 findById(id: number): Observable<Enclos> {
  return this.http.get<Enclos>("http://localhost:8080/api/enclos/"+id);
}

save(enclos: Enclos): Observable<Enclos> {
  if(enclos.id) { // mise à jour
    return this.http.put<Enclos>("http://localhost:8080/api/enclos/"+enclos.id, enclos);
  } else { // création
    return this.http.post<Enclos>("http://localhost:8080/api/produit", enclos);;
  }
 }

 deleteById(id: number): Observable<void> {
  return this.http.delete<void>("http://localhost:8080/api/enclos/"+id);
 }

}
