import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductAlertsComponent = class ProductAlertsComponent {
    constructor(api, notificationsServices) {
        this.api = api;
        this.notificationsServices = notificationsServices;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.api.getSinVariable().subscribe(response => {
            this.users = response.map(users => {
                users.edad = 1993;
                return users;
            });
            this.notificationsServices.toast("exitoso!");
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
};
ProductAlertsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-alerts',
        templateUrl: './product-alerts.component.html',
        styles: []
    })
], ProductAlertsComponent);
export { ProductAlertsComponent };
//# sourceMappingURL=product-alerts.component.js.map