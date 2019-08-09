import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ControlsComponent } from './controls/controls.component';
import { TablesComponent } from './tables/tables.component';
import { ClientsComponent } from './clients/clients.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'controls', component: ControlsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'clients', component: ClientsComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map