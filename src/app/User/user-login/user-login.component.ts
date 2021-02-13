import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfytService } from 'src/app/Services/alertyfyt.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
@ViewChild("LoginForm") Loginform : Form;
  constructor(private authservice: AuthService, private alerty: AlertyfytService, private routes: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit(Loginform : NgForm){

    const token = this.authservice.authuser(Loginform.value);
    if(token){
      localStorage.setItem("token", token.Name)
      this.alerty.SuccessMesage("Login successful");
      this.routes.navigate(["/"]);
    }
    else{
      this.alerty.FailurMessage("login failed");
    }
  }

}
