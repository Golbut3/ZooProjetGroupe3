import { Component, OnInit } from '@angular/core';
 import { FormGroup } from '@angular/forms';

@Component({
   selector: 'app-employe',
   templateUrl: './employe.component.html',
   styleUrls: ['./employe.component.css']
 })
 export class EmployeComponent implements OnInit {
   employe:FormGroup;
   showForm : boolean;
   submitted: boolean=false;
   constructor(private employeHttpService : empl,private formBuilder: FormBuilder){
   }
   ngOnInit(): void {
     this.adminForm = this.formBuilder.group({
      
       type:this.formBuilder.control(''),
       id: this.formBuilder.control(''),
       login: this.formBuilder.control(''),
       password:this.formBuilder.control(''),
       nom: this.formBuilder.control(''),
       prenom: this.formBuilder.control(''),
       version:this.formBuilder.control('')
     });
   }
   list(): Array<Admin> {
     return this.adminHttpService.findAll();
   }
   add(){   
     this.adminForm.reset();
     this.showForm = true;}
  
   edit(id:number){
     this.adminHttpService.findById(id).subscribe(response => {
       this.adminForm.patchValue(response);
       this.showForm = true;
     })
 }
   remove(id:number){
     this.adminHttpService.deleteById(id);
   }

//   save() {
//     this.adminForm.patchValue({type:"admin"});
//     this.adminHttpService.save(this.adminForm.value);
//     this.submitted=true;
//     this.showForm=false;
//     console.log("saved")
//   }

//   cancel() {
//     this.showForm = false;
//     this.adminForm.reset();
//   }
// }
// }
