import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Espece } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspeceHttpService {

  especes: Array<Espece> = new Array<Espece>();
  apiEspeceUrl: string = environment.apiUrl + "/espece";

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    let obs: Observable<Espece[]> = this.http.get<Espece[]>(this.apiEspeceUrl);

    obs.subscribe(resp => {
      this.especes = resp;
      console.log(this.especes)
    });
  }

  findAll() : Array<Espece> {
    return this.especes;
  }

  findAllForAsync(): Observable<Espece[]> {
    return this.http.get<Espece[]>(this.apiEspeceUrl);
  }

  findById(id: number): Observable<Espece> {
    let obs: Observable<Espece> = this.http.get<Espece>(this.apiEspeceUrl + "/"+id);
  
    return obs;
  }

  save(espece: Espece): void {
    if(espece.id) { // mise à jour
      this.http.put<Espece>(this.apiEspeceUrl + "/"+espece.id, espece).subscribe(resp => {
        this.load();
      });
    } else { // création
      this.http.post<Espece>(this.apiEspeceUrl, espece).subscribe(resp => {
        this.load();
      });
    }
   }
   deleteById(id: number) {
      this.http.delete<void>(this.apiEspeceUrl + "/"+id).subscribe(resp => {
        this.load();
   });
   }
}
