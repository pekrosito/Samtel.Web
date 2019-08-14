import { Component, OnInit } from '@angular/core';

import { UserService } from './../core/user.service';
import { NotificationsService } from './../notifications/notifications.component';


import { ClientService } from '../core/client.service';
import { GeneralService } from '../core/general.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
   /*
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
======= */
  clients: any;
  identifications: any;
  ocupations: any;

  constructor(private clientService: ClientService, private generalService: GeneralService, public notificationsServices: NotificationsService) { }

  ngOnInit() {
    this.load();

  }

  load() {
    this.getIdentification((identification) => {
      this.identifications = identification;
      console.log(identification)

      this.getOcupations((ocupation) => {
        this.ocupations = ocupation;
        console.log(ocupation)

        this.getClients((client)  => {
          this.clients = client;
          console.log(client)
        })
      })
    })
  }

  getIdentification(callBack) {
    this.generalService.getIdentification().subscribe(
      response => {
        if (callBack) {
          return callBack(response);
        }
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("Error al consultar la información de identificación!");
      }
    )
  }

  getOcupations(callBack) {
    this.generalService.getOcupations().subscribe(
      response => {
        if (callBack) {
          return callBack(response);
        }
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("Error al consultar la información de Ocupacion!");
      }
    )
  }

  getClients(callBack) {
    this.clientService.getClients().subscribe(
      response => {
        if (callBack) {
          return callBack(response)
        }
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("error!");
        this.notificationsServices.toast("Error al consultar la información de clientes!");
      }
    )
  }

  editClient(client) {
    console.log("event", client)
    client.edit = false;
  }

  deleteClient(client, index) {
    console.log("i", index)
    console.log("client", client)
    this.notificationsServices.toast("El usuario " + client.nombre_completo + " fue eliminado satisfactoriamente");
    //this.users.splice(index,1);
    client.edit = true;
  }

  changeIdentification() {
    console.log("event")
  }
  changeOcupation() {
    console.log("event")
  }

  changeTypeIdentification(event, client) {
    console.log("identification", event.srcElement.value)
    console.log("client", client)
  }
  changeTypeOcupation(event, client) {
    console.log("ocupation", event.srcElement.value)
    console.log("client", client)
  }
}
