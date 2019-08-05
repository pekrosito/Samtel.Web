import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductAlertsComponent = class ProductAlertsComponent {
    constructor(api, snackBar) {
        this.api = api;
        this.snackBar = snackBar;
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
            this.snackBar.open('Barra de navegación', 'Cerrar', {
                duration: 2000,
            });
        }, error => { console.log("Error"); });
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