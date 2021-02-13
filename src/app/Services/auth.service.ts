import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authuser(user: any){
    let Users =[];
    if(localStorage.getItem("Users")){
      Users = JSON.parse(localStorage.getItem("Users"));
    };
    return Users.find(u => u.Name === user.Name && u.Password === user.Password);
  }
}
