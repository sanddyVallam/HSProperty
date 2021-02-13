import { Injectable } from '@angular/core';
import { IUser } from '../Model/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  Users(User : IUser){
    let Users  = [];
    if(localStorage.getItem("Users"))
    {
      Users = JSON.parse(localStorage.getItem("Users"));
      Users = [User,...Users];
    }else{
      Users = [User];
    }
    localStorage.setItem("Users", JSON.stringify(Users));

  };
}
