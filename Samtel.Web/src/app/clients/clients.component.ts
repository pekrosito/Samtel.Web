import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications/notifications.component';
import { ClientService } from '../core/client.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {
  clients: any;
  constructor(private api: ClientService, public notificationsServices: NotificationsService, private FB: FormBuilder) { }

  ngOnInit() {
    
    this.load();
  }

  load() {
    this.api.getClients().subscribe(
      response => {
        this.clients = response.map(client => {
          
          client.nombreCompleto = client.nombre + " -- " + client.apellido;
          return client;
        });
        this.setData(response);
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("error!");
      }
    )

  }

  setData(response) {
   // this.formPerson.get('nombre').setValue(response[0].nombre);
    //this.formPerson.get('apellido').setValue(response[0].apellido);
  }

}
