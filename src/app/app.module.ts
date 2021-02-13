import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {propertyCardComponent} from './Property/Property-card/Property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import {HousingService} from './Services/housing.service';
import { AddPropertyComponent } from './Property/Add-Property/add-property/add-property.component'
import {Routes, RouterModule} from '@angular/router'
import { PropertyDetailComponent } from './Property/Property-detail/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { RegisterUserComponent } from './User/User-Register/RegisterUser.component';
import { UserServiceService } from './Services/user-service.service';
import { AlertyfytService } from './Services/alertyfyt.service';
import { AuthService } from './Services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { ButtonsModule} from 'ngx-bootstrap/buttons';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';


const approutes : Routes = [
  {path: "", component: PropertyListComponent},
  {path: "rent-property", component: PropertyListComponent},
  {path: "property-detail/:Id", component: PropertyDetailComponent},
  {path: "add-property", component: AddPropertyComponent},
  {path: "User/Login", component: UserLoginComponent},
  {path: "User/Register", component: RegisterUserComponent},
  {path: "**", component: PropertyListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    propertyCardComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    NavBarComponent,
    AddPropertyComponent,
    RegisterUserComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),

  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertyfytService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
