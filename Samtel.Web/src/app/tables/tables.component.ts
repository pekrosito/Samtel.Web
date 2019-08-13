import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './../notifications/notifications.component';
import { ClientService } from '../core/client.service';
import { GeneralService } from '../core/general.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  clients: any;
  identifications: any;
  ocupations: any;

  constructor(private clientService: ClientService, private generalService: GeneralService, public notificationsServices: NotificationsService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.getIdentifications((identification) => {
      this.identifications = identification;
      console.log(identification)

      this.getOcupations((ocupations) => {
        this.ocupations = ocupations;
        console.log(ocupations)

        this.getClients((clients)  => {
          this.clients = clients;
          console.log(clients)
        })
      })
    })
  }

  getIdentifications(callBack) {
    this.generalService.getIdentifications().subscribe(
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
        this.notificationsServices.toast("Error al consultar la información de identificación!");
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
    this.notificationsServices.toast("El usuario " + client.nombreCompleto + " fue eliminado satisfactoriamente");
    //this.users.splice(index,1);
    client.edit = true;
  }

  changeIdentification() {
    console.log("event")
  }

  changeTypeIdentification(event, client) {
    console.log("identification", event.srcElement.value)
    console.log("client", client)
  }
}
