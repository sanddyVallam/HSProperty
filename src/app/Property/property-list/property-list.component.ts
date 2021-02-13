
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service'
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertyList: IProperty[];
  Prop: IProperty;
  SellRent = 1;

  constructor(private Houseservice: HousingService, private Activeroute: ActivatedRoute) { }



  ngOnInit(): void {
    if(this.Activeroute.snapshot.url.toString()){
      this.SellRent = 2;
    }


    this.Houseservice.GetAllProperties(this.SellRent)
    .subscribe(
      data => {
        this.PropertyList = data;
      },
      error => {
        console.log(error);
      }

    )
  }

}
