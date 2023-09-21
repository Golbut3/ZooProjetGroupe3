import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {
  comptes : Array<Client> = new Array<Client>;
  url : string = "http://localhost:8080/api/client"

  constructor(private http: HttpClient) { 
    this.load();
  }

  load(): void {
    let obs: Observable<Client[]> = this.http.get<Client[]>(this.url);

    obs.subscribe(resp => {
      this.comptes = resp;
      console.log(this.comptes)
    });
}
findAll() : Array<Client> {
  return this.comptes;
}

findById(id: number): Observable<Client> {
  let obs: Observable<Client> = this.http.get<Client>(this.url + "/"+id);

  return obs;
}

save(client: Client): void {
  console.log(client)
  if(client.id) { // mise à jour
    this.http.put<Client>(this.url + "/"+client.id, client).subscribe(resp => {
      this.load();
    });
  } else { // création
    this.http.post<Client>(this.url, client).subscribe(resp => {
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
