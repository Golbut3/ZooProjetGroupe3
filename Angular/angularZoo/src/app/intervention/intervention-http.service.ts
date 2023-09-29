import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervention } from '../model';
import { InterventionComponent } from './intervention.component';

@Injectable({
  providedIn: 'root'
})
export class InterventionHttpService {
  
  interventions: Array<Intervention> = new Array<Intervention>;
  url: string = "http://localhost:8080/api/intervention"
  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    let obs : Observable<Intervention[]> = this.http.get<Intervention[]>(this.url);
    obs.subscribe(resp => {
        this.interventions=resp;})
    }

  findAll(): Array<Intervention> {
   
        return this.interventions
        }
     
  

  findById(id: number): Observable<Intervention> {
   let obs = this.http.get<Intervention>("http://localhost:8080/api/intervention/"+id)
   return obs
  }

  save(intervention: Intervention): void{
    if(intervention.id) { // mise à jour
      this.http.put<Intervention>("http://localhost:8080/api/intervention/"+intervention.id, intervention).subscribe(resp => {
        this.load()});
    } 
    else { // création
     this.http.post<Intervention>("http://localhost:8080/api/intervention", intervention).subscribe(resp => {
        this.load();
      });
    }
   }

   deleteById(id: number){
    this.http.delete<void>("http://localhost:8080/api/intervention/"+id).subscribe(resp => {
      this.load();
    });;
   }
}
