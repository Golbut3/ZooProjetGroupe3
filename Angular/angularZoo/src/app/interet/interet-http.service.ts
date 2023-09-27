import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interet } from '../model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteretHttpService {
  interets: Array<Interet> = new Array<Interet>();
  apiInteretUrl: string = environment.apiUrl + "/interet"
  constructor(private http: HttpClient) { 
    this.load();
  }
  load(): void {
    let obs: Observable<Interet[]> = this.http.get<Interet[]>(this.apiInteretUrl);

    obs.subscribe(resp => {
      this.interets = resp;
    });
  }
  findAll() : Array<Interet> {
    return this.interets;
  }

  findAllForAsync(): Observable<Interet[]> {
    return this.http.get<Interet[]>(this.apiInteretUrl);
  } 

  deleteById(id: number) {
    this.http.delete<void>(this.apiInteretUrl + "/"+id).subscribe(resp => {
      this.load();
    });
   }
   findById(id: number): Observable<Interet> {
  
      let obs: Observable<Interet> = this.http.get<Interet>(this.apiInteretUrl + "/"+id);

      return obs;

  }
  save(interet: Interet): void{
    if(interet.id) { // mise à jour
      console.log("on est en PUT interet.id : ",interet.id)
      this.http.put<Interet>(this.apiInteretUrl + "/"+interet.id, interet).subscribe(resp => {
        
        this.load();
        
      });
    } else { // création
      console.log("on est en POST")
      this.http.post<Interet>(this.apiInteretUrl, interet).subscribe(resp => {
        
        this.load();
        
      });
    }
  }
}