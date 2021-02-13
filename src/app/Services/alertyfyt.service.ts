import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertyfytService {

  constructor() { }

  SuccessMesage(Message : string){
    alertyfy.success(Message);
  }
  FailurMessage(Message: string){
    alertyfy.error(Message);
  }
  WarningMessage(Message: string){
    alertyfy.warning(Message);
  }
}
