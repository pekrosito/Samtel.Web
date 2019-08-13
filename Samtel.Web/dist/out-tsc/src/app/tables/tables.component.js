import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TablesComponent = class TablesComponent {
    constructor(api, notificationsServices) {
        this.api = api;
        this.notificationsServices = notificationsServices;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.api.getClients().subscribe(response => {
            console.log(response);
            this.clients = response.map(client => {
                client.edad = 1993;
                client.edit = false;
                return client;
            });
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