import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'katarinas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSitter: boolean;


  constructor() {
    console.log("I am running the constructor");
  }

  showSitter() {
    this.isSitter = true;
  }

  onSubmitLogin() {
    alert("You clicked login")
  }

  sayHi() {
    alert('Hi there');
  }
  
  ngOnInit() {
  }

}
