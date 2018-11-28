import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { SittersActions } from '../sitters.actions';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;
  isBaby: boolean; // local variable


  constructor(private fb: FormBuilder, private tempData: TempDataService,
    private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>,
    private crudService: CrudService) { }
  

  ngOnInit() {
    this.ngRedux.select(res => res.sitters).subscribe((data) => {
      console.log("redux says: ", data);
      this.isBaby = data.isBaby;
    })

    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });  
  }

  onSubmit(registerForm) {
    console.log(registerForm);
    let sitter = registerForm.value as Sitter;
    // this.tempData.addSitter(sitter);

    this.sittersActions.createSitter(sitter);

    //I will change this later...
    // this.crudService.createSitter(sitter).subscribe(result => {
    //   console.log(result);
    // }, error => {
      // console.log(error);
    // });
  }
}
