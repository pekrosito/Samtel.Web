import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';
import { NotificationsService } from './../notifications/notifications.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styles: []
})
export class ProductAlertsComponent implements OnInit {
  users;

  constructor(private api: UserService, public notificationsServices: NotificationsService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getSinVariable().subscribe(
      response => { this.users = response.map(users => {
        users.edad = 1993;
        return users;
      });
        this.notificationsServices.toast("exitoso!");
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("error!");
      }
    )
  }

}
