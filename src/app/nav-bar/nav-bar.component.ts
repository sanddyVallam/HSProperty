import { Component, OnInit } from '@angular/core';
import { AlertyfytService } from '../Services/alertyfyt.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 LoggedInUser: string;
  constructor(private alertuser: AlertyfytService) { }

  ngOnInit(): void {
  }

  Loggedin(){
    this.LoggedInUser = localStorage.getItem("token");
    return this.LoggedInUser;
  }
  Loggedout(){
    localStorage.removeItem("token");
    this.alertuser.SuccessMesage("Your are Successfully logged out");
  }

}
