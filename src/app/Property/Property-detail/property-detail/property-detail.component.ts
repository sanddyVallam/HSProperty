import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routes: Router) { }

  public PropertyId : number;
  ngOnInit(): void {
    this.PropertyId = +this.route.snapshot.params["Id"] ;

    this.route.params.subscribe(
      (data) => {
        this.PropertyId = +data["Id"]
      }
    );

  }



  NextPage()
  {
    this.PropertyId += 1
    this.routes.navigate(["property-detail", this.PropertyId]);
  }

}
