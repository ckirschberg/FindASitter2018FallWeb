import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'katarinas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSitter: boolean;
  loginForm: FormGroup;
  

  // Dependency injection
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

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
    console.log(loginForm);
    if (loginForm.valid) {
      // Call an api to validate the login.

      this.authService.login().subscribe(val => {
        console.log(val);
        this.router.navigate(['portal']) // We might want to route to "portal".
      });

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
