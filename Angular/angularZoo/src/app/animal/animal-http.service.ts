import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { EspeceHttpService } from '../espece/espece-http.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalHttpService {


  animals: Array<Animal> = new Array<Animal>();
  apiAnimalUrl: string = environment.apiUrl + "/animal";

  constructor(private http: HttpClient, private especeHttpService: EspeceHttpService) {
    this.load();
  }

  load(): void {
    let obs: Observable<Animal[]> = this.http.get<Animal[]>(this.apiAnimalUrl);

    obs.subscribe(resp => {
      this.animals = resp;
      console.log(this.animals)
    });
  }

  findAll() : Array<Animal> {
    return this.animals;
  }

  findAllForAsync(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiAnimalUrl);
  }

  findById(id: number): Observable<Animal> {
    let obs: Observable<Animal> = this.http.get<Animal>(this.apiAnimalUrl + "/"+id);
  
    return obs;
  }

  save(animal: Animal): void {

    if(animal.id) { // mise à jour
      this.http.put<Animal>(this.apiAnimalUrl + "/"+animal.id, animal).subscribe(resp => {
        this.load();
        this.especeHttpService.load();
      });
    } else { // création
      this.http.post<Animal>(this.apiAnimalUrl, animal).subscribe(resp => {
        this.load();
        this.especeHttpService.load();
      });
    }
   }
   deleteById(id: number) {
      this.http.delete<void>(this.apiAnimalUrl + "/"+id).subscribe(resp => {
        this.load()
   });
   }
}