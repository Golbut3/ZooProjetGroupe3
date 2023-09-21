import { Component, OnInit } from '@angular/core';
import { AdminHttpService } from './admin-http.service';
import { Admin } from '../../model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm:FormGroup;
  showForm : boolean;
  submitted: boolean=false;
  constructor(private adminHttpService : AdminHttpService,private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      
      type:this.formBuilder.control('').setValue("admin"),
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

  save() {
    this.adminForm.patchValue({type:"admin"});
    this.adminHttpService.save(this.adminForm.value);
    this.submitted=true;
    this.showForm=false;
    console.log("saved")
  }

  cancel() {
    this.showForm = false;
    this.adminForm.reset();
  }
}
