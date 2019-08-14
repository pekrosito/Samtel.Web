import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ClientsComponent = class ClientsComponent {
    constructor(api, notificationsServices, FB) {
        this.api = api;
        this.notificationsServices = notificationsServices;
        this.FB = FB;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.api.getClients().subscribe(response => {
            this.clients = response.map(client => {
                client.nombreCompleto = client.nombre + " -- " + client.apellido;
                return client;
            });
            this.setData(response);
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
    setData(response) {
        // this.formPerson.get('nombre').setValue(response[0].nombre);
        //this.formPerson.get('apellido').setValue(response[0].apellido);
    }
};
ClientsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-clients',
        templateUrl: './clients.component.html',
        styles: []
    })
], ClientsComponent);
export { ClientsComponent };
//# sourceMappingURL=clients.component.js.map