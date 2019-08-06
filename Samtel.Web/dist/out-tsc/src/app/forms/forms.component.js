import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FormsComponent = class FormsComponent {
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
FormsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-forms',
        templateUrl: './forms.component.html',
        styles: []
    })
], FormsComponent);
export { FormsComponent };
//# sourceMappingURL=forms.component.js.map