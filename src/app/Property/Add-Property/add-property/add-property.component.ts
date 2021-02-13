import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild("PropertyForm") form: NgForm;
  @ViewChild("FormTabs") Tabs: TabsetComponent;
  PropertyType: Array<string> = ["House", "Apartment", "Duplex"];
  furnitureType: Array<string> = ["Semi", "Full"];
  PropertyView: {};

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  OnBack(){
    this.route.navigate(["/"]);
  }

  onSubmit(){
    console.log(this.form);

  }

  OnSelectTab(TabId: number){
    this.Tabs.tabs[TabId].active = true;
  }

}
