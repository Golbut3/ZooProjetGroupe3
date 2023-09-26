import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chalet } from '../model';
import { ChaletHttpService } from './chalet-http.service';

@Component({
  selector: 'app-chalet',
  templateUrl: './chalet.component.html',
  styleUrls: ['./chalet.component.css']
})
export class ChaletComponent {

chalets : Array<Chalet>;

chaletForm: Chalet = new Chalet;

  constructor(private chaletHttpService: ChaletHttpService){
     
  }

  ngOnInit():void{
  this.chalets= this.chaletHttpService.findAll();
  

  }
  
  // add(){
  //   this.chaletForm = new Chalet();
  
  // }

//   edit(id: number) {
//     this.chaletHttpService.findById(id).subscribe(response => {
//       this.Form.patchValue(response);
//       this.showForm = true;
//     });
//   }

     

//     });
//   }

//   save(){this.enclosHttpService.save(this.enclosForm).subscribe(resp => {
//     this.encloss$ = this.enclosHttpService.findAll();
//   });}

//   cancel(){this.enclosForm = new Enclos(0);
//   }

//   remove(id:number){
//     this.enclosHttpService.deleteById(id).subscribe(resp => {
//       this.encloss$ = this.enclosHttpService.findAll();
//     });

//   }


// }
}