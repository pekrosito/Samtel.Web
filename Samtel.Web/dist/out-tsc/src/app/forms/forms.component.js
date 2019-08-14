import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
let FormsComponent = class FormsComponent {
    constructor(api, notificationsServices, FB) {
        this.api = api;
        this.notificationsServices = notificationsServices;
        this.FB = FB;
        this.submitted = false;
    }
    ngOnInit() {
        this.loadComponent();
        this.load();
    }
    load() {
        this.api.getSinVariable().subscribe(response => {
            this.users = response.map(persona => {
                persona.edad = 1993;
                persona.nombreCompleto = persona.nombre + " -- " + persona.apellido;
                return persona;
            });
            this.setData(response);
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
    loadComponent() {
        this.formPerson = this.FB.group({
            nombre: new FormControl({}, Validators.required),
            apellido: new FormControl({}, Validators.required),
            user: new FormControl({}, Validators.required)
        });
    }
    aceptar() {
        this.submitted = true;
        console.log("this.formPerson.invalid", this.formPerson.value);
        if (this.formPerson.invalid) {
            return;
        }
        this.api.metodoPutActualizar(this.formPerson.value).subscribe(response => { console.log("respnse", response); }, error => { this.notificationsServices.toast("error!"); console.log("error", error); });
    }
    changeUser(event) {
        console.log("event", event);
    }
    setData(response) {
        this.formPerson.get('nombre').setValue(response[0].nombre);
        this.formPerson.get('apellido').setValue(response[0].apellido);
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