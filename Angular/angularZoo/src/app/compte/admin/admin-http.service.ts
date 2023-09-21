import { Injectable } from '@angular/core';
import { Admin } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  comptes : Array<Admin> = new Array<Admin>;
  url : string = "http://localhost:8080/api/admin"

  constructor(private http: HttpClient) { 
    this.load();
  }

  load(): void {
    let obs: Observable<Admin[]> = this.http.get<Admin[]>(this.url);

    obs.subscribe(resp => {
      this.comptes = resp;
      console.log(this.comptes)
    });
}
findAll() : Array<Admin> {
  return this.comptes;
}

findById(id: number): Observable<Admin> {
  let obs: Observable<Admin> = this.http.get<Admin>(this.url + "/"+id);

  return obs;
}

save(admin: Admin): void {
  console.log(admin)
  if(admin.id) { // mise à jour
    this.http.put<Admin>(this.url + "/"+admin.id, admin).subscribe(resp => {
      this.load();
    });
  } else { // création
    this.http.post<Admin>(this.url, admin).subscribe(resp => {
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
