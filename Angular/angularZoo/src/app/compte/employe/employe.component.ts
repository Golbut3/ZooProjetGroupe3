import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeHttpService } from './employe-http.service';
import { Employe } from 'src/app/model';

@Component({
   selector: 'app-employe',
   templateUrl: './employe.component.html',
   styleUrls: ['./employe.component.css']
 })
 export class EmployeComponent implements OnInit {
   employeForm:FormGroup;
   showForm : boolean;
   submitted: boolean=false;
   constructor(private employeHttpService : EmployeHttpService ,private formBuilder: FormBuilder){
   }
   ngOnInit(): void {
     this.employeForm = this.formBuilder.group({
      
       type:this.formBuilder.control(''),
       id: this.formBuilder.control(''),
       login: this.formBuilder.control(''),
       password:this.formBuilder.control(''),
       nom: this.formBuilder.control(''),
       prenom: this.formBuilder.control(''),
       version:this.formBuilder.control(''),
       sal:this.formBuilder.control(''),
       poste:this.formBuilder.control('')
     });
   }
   list(): Array<Employe> {
     return this.employeHttpService.findAll();
   }
   add(){   
     this.employeForm.reset();
     this.showForm = true;}
  
   edit(id:number){
     this.employeHttpService.findById(id).subscribe(response => {
       this.employeForm.patchValue(response);
       this.showForm = true;
     })
 }
   remove(id:number){
     this.employeHttpService.deleteById(id);
   }

  save() {
     this.employeForm.patchValue({type:"employe"});
     this.employeHttpService.save(this.employeForm.value);
  this.submitted=true;
    this.showForm=false;
    console.log("saved")
  }

  cancel() {
    this.showForm = false;
    this.employeForm.reset();
   }
 }

