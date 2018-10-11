import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { SittersActions } from '../sitters.actions';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;
  isBaby: boolean; // local variable


  constructor(private fb: FormBuilder, private tempData: TempDataService,
    private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>) { }
  

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
    
    this.tempData.addSitter(sitter);
  }
}
