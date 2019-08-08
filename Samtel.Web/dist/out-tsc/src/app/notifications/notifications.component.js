import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let NotificationsService = class NotificationsService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    toast(message) {
        this.snackBar.open(message, 'Cerrar', {
            duration: 2000,
        });
    }
};
NotificationsService = tslib_1.__decorate([
    Injectable()
], NotificationsService);
export { NotificationsService };
//# sourceMappingURL=notifications.component.js.map