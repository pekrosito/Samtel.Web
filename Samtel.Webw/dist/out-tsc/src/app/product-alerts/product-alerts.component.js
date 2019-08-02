import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductAlertsComponent = class ProductAlertsComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.api.getSinVariable().subscribe(response => { console.log('response', response); }, error => { });
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