import { Component, OnInit } from '@angular/core';
import { EspeceHttpService } from './espece-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnclosHttpService } from '../enclos/enclos-http.service';
import { Espece } from '../model';

@Component({
  selector: 'app-espece',
  templateUrl: './espece.component.html',
  styleUrls: ['./espece.component.css']
})
export class EspeceComponent implements OnInit {

  especeForm!: FormGroup;
  showForm: boolean = false;

  constructor(private especeHttpService: EspeceHttpService, private enclosHttpService: EnclosHttpService, private formBuilder: FormBuilder) {
   }

  
  ngOnInit(): void {
    this.especeForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      nom: this.formBuilder.control(''),
      animaux: this.formBuilder.control(''),
    });
  }

  list():Array<Espece> {
   return this.especeHttpService.findAll();
  }

  add() {
    this.especeForm.reset();
    this.showForm = true;
  }

  edit(id: number) {
    this.especeHttpService.findById(id).subscribe(resp => {
      this.especeForm.patchValue(resp);
      this.showForm = true;
    });
  }

  remove(id: number) {
    this.especeHttpService.deleteById(id);
  }

  save() {  
    this.especeHttpService.save(this.especeForm.value);
  }

  cancel() {
    this.showForm = false;
    this.especeForm.reset();
  }

}