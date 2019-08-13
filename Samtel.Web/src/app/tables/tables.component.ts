import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';
import { NotificationsService } from './../notifications/notifications.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  users: any;

  constructor(private api: UserService, public notificationsServices: NotificationsService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getSinVariable().subscribe(
      response => {
        this.users = response.map(user => {
          user.edad = 1993;
          user.nombreCompleto = user.nombre + " -- " + user.apellido;
          user.edit = false;
          return user;
        });
        console.log("  this.users ", this.users)
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("error!");
      }
    )
  }

  editUser(user) {
    console.log("event", user)
    user.edit = false;
  }

  deleteUser(user, index) {
    console.log("i", index)
    console.log("user", user)
    this.notificationsServices.toast("El usuario " + user.nombre + " fue eliminado satisfactoriamente");
    //this.users.splice(index,1);
    user.edit = true;
  }

}
