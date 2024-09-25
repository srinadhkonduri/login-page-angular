import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeForm : 'login' | 'register' = 'login';
  // creating a response in a local storage
  // this is a class of register Model
  registerObj:registerModel = new registerModel();
  loginObj:loginModel = new loginModel();

  // creating a snack bar
  constructor(private _snackbar:MatSnackBar, private _router: Router){

  }

  toggleForm(form: 'login' | 'register'){
    this.activeForm = form;
  }



  // this is for register the information in the local storage
  registerForm() {
    const localUser = localStorage.getItem('users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.registerObj);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users));
    }
    // here we are using the snack bar for message
    this._snackbar.open("User register Successful",'Close');
  }
  loginForm(){
    const localUsers = localStorage.getItem('users');
    if (localUsers != null) {
    const users = JSON.parse(localUsers);
    const isUserExist = users.find((user:registerModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
    if (isUserExist != undefined) {
      this._snackbar.open("Login Successfully","Close",);
      // here navigate by url is used to navigate to the path
      this._router.navigateByUrl("/dashboard");
    } else{
      this._snackbar.open('Email or Password is incorrect');
    }
    }
  }

}

export class registerModel {
  name:string;
  email:string;
  password:string;
  // here constructor is very important to assign values
  constructor(){
    this.name = "";
    this.email = "";
    this.password = "";
  }
}

export class loginModel {
  email:string;
  password:string;
  // here constructor is very important to assign values
  constructor(){
    this.email = "";
    this.password = "";
  }
}
