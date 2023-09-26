import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Chalet, Enclos, Logement } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChaletHttpService {


chalets:Array<Chalet> = new Array <Chalet>();

  constructor(private http: HttpClient) { 
    this.load()
  }

  load(): void {
    let obs: Observable<Chalet[]> = this.http.get<Chalet[]>("http://localhost:8080/api/logement/chalet");

    obs.subscribe(resp => {
      this.chalets=resp;
      console.log(this.chalets)
    });
  }

  findAll(): Array<Chalet>{

    return this.chalets
   }

   findAllForAsync(): Observable<Chalet[]> {
    return this.http.get<Chalet[]>("http://localhost:8080/api/logement/chalet");
  } 

  findById(id: number): Observable<Chalet> {
    let obs: Observable<Chalet> = this.http.get<Chalet>("http://localhost:8080/api/logement/chalet"+"/"+id);

    return obs;
  }



}
