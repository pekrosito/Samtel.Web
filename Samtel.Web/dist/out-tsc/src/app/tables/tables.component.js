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
            console.log("esto me retorno", response);
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
};
TablesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-tables',
        templateUrl: './tables.component.html',
        styles: []
    })
], TablesComponent);
export { TablesComponent };
//# sourceMappingURL=tables.component.js.map