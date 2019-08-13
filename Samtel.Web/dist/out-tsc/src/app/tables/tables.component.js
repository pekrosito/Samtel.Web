import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TablesComponent = class TablesComponent {
    constructor(clientService, generalService, notificationsServices) {
        this.clientService = clientService;
        this.generalService = generalService;
        this.notificationsServices = notificationsServices;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.getIdentifications((identification) => {
            this.identifications = identification;
            console.log(identification);
            this.getOcupations((ocupations) => {
                this.ocupations = ocupations;
                console.log(ocupations);
                this.getClients((clients) => {
                    this.clients = clients;
                    console.log(clients);
                });
            });
        });
    }
    getIdentifications(callBack) {
        this.generalService.getIdentifications().subscribe(response => {
            response = response.map(iden => {
                iden.id = iden.description == "NUMERO DE IDENTIFICACION TRIBUTARIA" ? 1 : iden.id;
                return iden;
            });
            console.log(response);
            if (callBack) {
                return callBack(response);
            }
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("Error al consultar la información de identificación!");
        });
    }
    getOcupations(callBack) {
        this.generalService.getOcupations().subscribe(response => {
            if (callBack) {
                return callBack(response);
            }
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("Error al consultar la información de identificación!");
        });
    }
    getClients(callBack) {
        this.clientService.getClients().subscribe(response => {
            if (callBack) {
                return callBack(response);
            }
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
    editClient(client) {
        console.log("event", client);
        client.edit = false;
    }
    deleteClient(client, index) {
        console.log("i", index);
        console.log("client", client);
        this.notificationsServices.toast("El usuario " + client.nombreCompleto + " fue eliminado satisfactoriamente");
        //this.users.splice(index,1);
        client.edit = true;
    }
    changeIdentification(event) {
        console.log("event", event.target.value);
    }
    changeTypeIdentification(event) {
        console.log("identification", event.target.value);
    }
};
TablesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-tables',
        templateUrl: './tables.component.html',
        styles: ['./tables.component.scss']
    })
], TablesComponent);
export { TablesComponent };
//# sourceMappingURL=tables.component.js.map