import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styles: []
})
export class ProductAlertsComponent implements OnInit {

  constructor(private api: UserService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getSinVariable().subscribe(
      response => {console.log('response',response);},
      error => {}
    )
  }

}
