import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styles: []
})
export class ProductAlertsComponent implements OnInit {
  users;

  constructor(private api: UserService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getSinVariable().subscribe(
      response => { this.users = response.map(users => {
        users.edad = 1993;
        return users;
      }); },
      error => { console.log("Error")}
    )
  }

}
