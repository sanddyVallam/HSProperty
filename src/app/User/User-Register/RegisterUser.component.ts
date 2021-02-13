import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/Model/iuser';
import { AlertyfytService } from 'src/app/Services/alertyfyt.service';
import { UserServiceService } from 'src/app/Services/user-service.service';


@Component({
  selector: 'app-RegisterUser',
  templateUrl: './RegisterUser.component.html',
  styleUrls: ['./RegisterUser.component.scss']
})
export class RegisterUserComponent implements OnInit {
RegistrationForm : FormGroup;
User : IUser;
UserSubmitted: boolean;
  constructor(private fb: FormBuilder, private UserService: UserServiceService, private alertMsg : AlertyfytService) { }

  ngOnInit() {
    //this.RegistrationForm = new FormGroup({
    //  UserName: new FormControl("Sanddy",Validators.required),
    //  Email:  new FormControl(null, [Validators.required, Validators.email]),
    //  Password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //  ConfirmPassword: new FormControl(null, [Validators.required]),
    //  Mobile: new FormControl(null, [Validators.required, Validators.minLength(10)])
    //},this.PaswordMatchfunction)
    this.Registerform();
  }

  Registerform(){

    this.RegistrationForm = this.fb.group({
      UserName : ["Sanddy",Validators.required],
      Email:  [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: [null, [Validators.required]],
      Mobile: [null, [Validators.required, Validators.minLength(10)]]

    },{validators : this.PaswordMatchfunction});
  }

  PaswordMatchfunction(fg: FormGroup) :Validators{
    return fg.get("Password").value === fg.get("ConfirmPassword").value ? null :
    {notmatch: true}
  }

  UserName(){
    return this.RegistrationForm.get("UserName") as FormControl;
  }



  Email(){
   return  this.RegistrationForm.get("Email") as FormControl;
  }

  Password(){
    return this.RegistrationForm.get("Password") as FormControl;
  }

  confirmPassword(){
    return this.RegistrationForm.get("ConfirmPassword") as FormControl;
  }

  Mobile(){
    return this.RegistrationForm.get("Mobile") as FormControl;
  }

  // OnSubmit(){
  //   console.log(this.RegistrationForm.value);
  // }

  Onsubmited(){
    this.UserSubmitted = true;
    //this.User = Object.assign(this.RegistrationForm.value);
    //localStorage.setItem("Users", JSON.stringify(this.User));
    if(this.RegistrationForm.valid){
      this.UserService.Users(this.OnUserPopulate());
      this.RegistrationForm.reset();
      this.UserSubmitted = false;
      this.alertMsg.SuccessMesage("Congrats, You are registered")
    }else{
      this.alertMsg.FailurMessage("Kindly provide all Required fields");
    }


  };

  OnUserPopulate(): IUser {
    return this.User = {
      Name : this.UserName().value,
      Email: this.Email().value,
      Password: this.Password().value,
      Mobile: this.Mobile().value
    }
  }


}
