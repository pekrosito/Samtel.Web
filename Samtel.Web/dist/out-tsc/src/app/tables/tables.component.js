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
        this.getIdentification((identification) => {
            this.identifications = identification;
            console.log(identification);
            this.getOcupations((ocupation) => {
                this.ocupations = ocupation;
                console.log(ocupation);
                this.getClients((client) => {
                    this.clients = client;
                    console.log(client);
                });
            });
        });
    }
    getIdentification(callBack) {
        this.generalService.getIdentification().subscribe(response => {
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
            this.notificationsServices.toast("Error al consultar la información de Ocupacion!");
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
            this.notificationsServices.toast("Error al consultar la información de clientes!");
        });
    }
    editClient(client) {
        console.log("event", client);
        client.edit = false;
    }
    deleteClient(client, index) {
        console.log("i", index);
        console.log("client", client);
        this.notificationsServices.toast("El usuario " + client.nombre_completo + " fue eliminado satisfactoriamente");
        //this.users.splice(index,1);
        client.edit = true;
    }
    changeIdentification() {
        console.log("event");
    }
    changeOcupation() {
        console.log("event");
    }
    changeTypeIdentification(event, client) {
        console.log("identification", event.srcElement.value);
        console.log("client", client);
    }
    changeTypeOcupation(event, client) {
        console.log("ocupation", event.srcElement.value);
        console.log("client", client);
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