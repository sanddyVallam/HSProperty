import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { map } from "rxjs/operators";
import {observable, Observable} from "rxjs"
import { IProperty } from '../Property/IProperty.interface';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';


@Injectable({
  providedIn: 'root'
})
export class HousingService {


  constructor(private http: HttpClient) {   }

  GetAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get("Data/Properties.json")
    //.catch(this.errohandler)
    .pipe(
      map(data =>
        {
          const Properties : Array<IProperty> = [];
          for(const item in data){
            if(data.hasOwnProperty(item) && data[item].SellRent === SellRent)
            {
              Properties.push(data[item]);
            }
          }
          return Properties;
        })

    )
  }

  // errohandler(errors: HttpErrorResponse){
  //   return observable.throw(errors.message || "server error");

  //   )
  //}

  // GeDatainPromise(){
  //   //1. Promise is an eagerLoading, it fetch the data only once, it doesn't fetch data multiple  like
       //2. Promise will get executed when it is defined
  //   //resolve("yep1");
  //   //resolve("yep2");
  //   //resolve("yep3");
  //   const promis = new Promise((resolve) => {
  //     console.log("done");
  //     setTimeout(() => {
  //       resolve("yep");
  //     }, 4000);
  //   });
  //   //Promise can be called using .then
  //   promis.then((data) =>{
  //     console.log(data);
  //   });
  // }

  // //1. Observables is an EagerLoading, it will execute only when it get called. It feteches multiple data like
     //2. Observable will not get executed when it is defined, it will get executed when subscribe will call it
  // //newkeywor.next(yep1)
  // //newkeywor.next(yep2)
  // //newkeywor.next(yep3)
  // //newkeywor.next(yep4)
  // GetDatainObservable(){
  //   const obser = new Observable((observers) => {
  //     console.log("done");
  //     setTimeout(() => {
  //       observers.next("yep");
  //     }, 4000);
  //   });
  //   //Observerable can be called using subscribe
  //   obser.subscribe((data) => {
  //     console.log(data);
  //   });
  // }

}
