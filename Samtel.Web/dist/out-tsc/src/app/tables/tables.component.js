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
        this.api.getSinVariable().subscribe(response => {
            this.users = response.map(user => {
                user.edad = 1993;
                user.nombreCompleto = user.nombre + " -- " + user.apellido;
                user.edit = false;
                return user;
            });
            console.log("  this.users ", this.users);
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
    editUser(user) {
        console.log("event", user);
        user.edit = false;
    }
    deleteUser(user, index) {
        console.log("i", index);
        console.log("user", user);
        this.notificationsServices.toast("El usuario " + user.nombre + " fue eliminado satisfactoriamente");
        //this.users.splice(index,1);
        user.edit = true;
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