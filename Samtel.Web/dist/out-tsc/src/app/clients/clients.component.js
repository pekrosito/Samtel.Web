import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
let ClientsComponent = class ClientsComponent {
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
    loadComponent() {
        this.formClient = this.FB.group({
            codNaturaleza: new FormControl({ value: '', disabled: false }, Validators.required),
            codTipoIdentificacion: new FormControl({ value: '', disabled: false }, Validators.required),
            codOcupacion: new FormControl({ value: '', disabled: false }, Validators.required),
            lugarExpedicion: new FormControl({ value: '', disabled: false }, Validators.required),
            numIdentificacion: new FormControl({ value: '', disabled: false }, Validators.required),
            identificacionCliente: new FormControl({ value: '', disabled: false }, Validators.required),
            nombreCompleto: new FormControl({ value: '', disabled: false }, Validators.required)
        });
    }
    load() {
        this.api.getSinVariableDos().subscribe(response => {
            console.log("esto me retorno", response);
            this.setData(response);
        }, error => {
            console.log("Error");
            this.notificationsServices.toast("error!");
        });
    }
    setData(response) {
        this.formClient.get('codNaturaleza').setValue(response[0].codNaturaleza);
        this.formClient.get('codTipoIdentificacion').setValue(response[0].codTipoIdentificacion);
        this.formClient.get('codOcupacion').setValue(response[0].codOcupacion);
        this.formClient.get('lugarExpedicion').setValue(response[0].lugarExpedicion);
        this.formClient.get('numIdentificacion').setValue(response[0].numIdentificacion);
        this.formClient.get('identificacionCliente').setValue(response[0].identificacionCliente);
        this.formClient.get('nombreCompleto').setValue(response[0].nombreCompleto);
    }
    aceptar() {
        this.submitted = true;
        console.log("this.formClient.invalid", this.formClient.value);
        if (this.formClient.invalid) {
            return;
        }
        this.api.metodoPostCrear(this.formClient.value).subscribe(response => { console.log("Respuesta del metodo Crear", response); }, error => { this.notificationsServices.toast("error!"); });
    }
    actualizar() {
        this.submitted = true;
        console.log("Este objeto voy a actualizar", this.formClient.value);
        console.log("invalido", this.formClient.invalid);
        if (this.formClient.invalid) {
            return;
        }
        this.api.metodoPutEditar(this.formClient.value, this.formClient.value.identificacionCliente).subscribe(response => { console.log("Respuesta del metodo Editar", response); }, error => { this.notificationsServices.toast("error!"); });
    }
};
ClientsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-clients',
        templateUrl: './clients.component.html',
        styles: []
    })
], ClientsComponent);
export { ClientsComponent };
//# sourceMappingURL=clients.component.js.map