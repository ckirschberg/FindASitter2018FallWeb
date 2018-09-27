import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private fb: FormBuilder, private tempData: TempDataService) { }
  

  ngOnInit() {
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
