import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'katarinas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSitter: boolean;
  loginForm: FormGroup;
  


  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', Validators.required]
    });

    console.log("I am running the constructor");
  }

  showSitter() {
    this.isSitter = true;
  }

  onSubmitLogin(loginForm) {
    if (loginForm.value.valid) {
      // Call an api to validate the login.
      alert("Yes it is valid");
    } else {
      alert("No not valid");
    }
    // console.log(loginForm);
    // alert("You clicked login")
  }

  sayHi() {
    alert('Hi there');
  }
  
  ngOnInit() {
  }

}
