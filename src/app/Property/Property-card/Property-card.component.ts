import { Component } from "@angular/core";

@Component({
  selector: "app-property-card",
  templateUrl: "Property-card.component.html",
  styleUrls: ["Property-card.component.css"],
})

export class propertyCardComponent{
  PropertyList: any =
    {
    "Id": 123,
    "Type": "Single Family",
    "Prize": "120000",
    "LOT": "half acre"
  }
};
