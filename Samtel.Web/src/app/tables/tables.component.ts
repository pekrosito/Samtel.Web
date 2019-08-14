import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';
import { GeneralService } from './../core/general.service';
import { NotificationsService } from './../notifications/notifications.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: []
})
export class TablesComponent implements OnInit {
  clients: any;
  identifications: any;
  constructor(private api: UserService, public notificationsServices: NotificationsService, private api2: GeneralService) { }

  ngOnInit() {
    this.load();
  }
  //lo que me retorna el getClients me lo asigna a la variable this.clients eso es callBack
  load() {
    this.getIdentifications((iden) => {
      this.identifications = iden;
      
   
    this.getClients((clients) => {
      this.clients = clients;
      console.log(clients)
    })
    })
  }
  getIdentifications(callBack) {
    this.api2.getIdentifications().subscribe(

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
  getClients(callBack) {
    this.api.getSinVariable().subscribe(

      response => {

        console.log("esto me retorno", response);
        this.clients = response.map(client => {
          client.edit = false;
          return client;
        });
        console.log("this.client", this.clients);
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
  editUser(user) {
    console.log("event", user)
    user.edit = false;
  }

  deleteUser(user, index) {
    console.log("i", index)
    console.log("user", user)
    this.notificationsServices.toast("El usuario " + user.codNaturaleza + " fue eliminado satisfactoriamente");
    //this.users.splice(index,1);
    user.edit = true;
  }
  changeIdentification(event) {
    console.log("Identificacion", event.srcElement.value);
  
  
  }
  changeTypeIdentification(event, client) {
    console.log("client", client);
    console.log("Identificacion", event.srcElement.value);
  }
  
}
