import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chalet, Enclos } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChaletHttpService {
encloss:Array<Chalet> = new Array <Enclos>();


  constructor(private http: HttpClient) { }

  load(): void {
    let obs: Observable<Chalet[]> = this.http.get<Chalet[]>("http://localhost:8080/chalet");

    obs.subscribe(resp => {
      this.encloss=resp;
    });
  }

  findAll(): Observable<Chalet[]>{

    return this.http.get<Chalet[]>("http://localhost:8080/chalet");
   }

   findAllForAsync(): Observable<Chalet[]> {
    return this.http.get<Chalet[]>("http://localhost:8080/chalet");
  } 

  findById(id: number): Observable<Chalet> {
    let obs: Observable<Chalet> = this.http.get<Chalet>("http://localhost:8080/chalet"+"/"+id);

    return obs;
  }

  save(chalet: Chalet): void {
    if(chalet.id) { // mise à jour
      this.http.put<Chalet>("http://localhost:8080/chalet" + "/"+chalet.id, chalet).subscribe(resp => {
        this.load();
      });
    } else { // création
      this.http.post<Chalet>("http://localhost:8080/chalet", chalet).subscribe(resp => {
        this.load();
      });
    }
   }
   deleteById(id: number) {
    this.http.delete<void>("http://localhost:8080/chalet"+ "/"+id).subscribe(resp => {
      this.load();
    });
   }


}
