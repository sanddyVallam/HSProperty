import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

@Component({
  selector: "app-property-card",
  templateUrl: "Property-card.component.html",
  styleUrls: ["Property-card.component.css"],
})

export class propertyCardComponent{

  @Input() Property : IProperty;

};
