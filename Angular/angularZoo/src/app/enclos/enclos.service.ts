import { Injectable } from '@angular/core';
import { Enclos } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EnclosService {

encloss:Array<Enclos> = new Array<Enclos>();
  
constructor() { 
    }


findAll(): Array<Enclos>
{
return this.encloss;
}

findById(id:number){
return this.encloss.find(e => e.id ==id);
}

save(enclos:Enclos):void{
if(enclos.id){
let pos = this.encloss.findIndex(enc => enc.id == enclos.id);
      this.encloss[pos] = enclos;
    } 
    else {
      let max = 0;
      this.encloss.forEach(e => {
        if(e.id > max) {
          max = e.id;
        }
      });

      enclos.id = ++max;

      this.encloss.push(enclos);
    }
  }
  deleteById(id: number) {
    let pos = this.encloss.findIndex(f => f.id == id);

    this.encloss.splice(pos, 1);
   }

}
