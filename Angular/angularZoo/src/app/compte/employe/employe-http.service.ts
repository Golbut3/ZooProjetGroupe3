import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class EmployeHttpService {
  comptes : Array<Employe> = new Array<Employe>;
  url : string = "http://localhost:8080/api/employe"

  constructor(private http: HttpClient) { 
    this.load();
  }

  load(): void {
    let obs: Observable<Employe[]> = this.http.get<Employe[]>(this.url);

    obs.subscribe(resp => {
      this.comptes = resp;
      console.log(this.comptes)
    });
}
findAll() : Array<Employe> {
  return this.comptes;
}

findById(id: number): Observable<Employe> {
  let obs: Observable<Employe> = this.http.get<Employe>(this.url + "/"+id);

  return obs;
}

save(employe: Employe): void {
  console.log(employe)
  if(employe.id) { // mise à jour
    this.http.put<Employe>(this.url + "/"+employe.id, employe).subscribe(resp => {
      this.load();
    });
  } else { // création
    this.http.post<Employe>(this.url, employe).subscribe(resp => {
      this.load();
    });
  }
 }

 deleteById(id: number) {
  this.http.delete<void>(this.url + "/"+id).subscribe(resp => {
    this.load();
  });
}
}
