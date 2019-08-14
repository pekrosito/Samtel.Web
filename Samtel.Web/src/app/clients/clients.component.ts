import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';
import { NotificationsService } from './../notifications/notifications.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {
  formClient: FormGroup;
  submitted = false;

  constructor(private api: UserService, public notificationsServices: NotificationsService, private FB: FormBuilder) { }

  ngOnInit() {
    this.loadComponent();
    this.load();
  }
  loadComponent() {
    this.formClient = this.FB.group({
      codigoNaturalezaCliente: new FormControl({ value: '', disabled: false}, Validators.required),
      codigoTipoIdent: new FormControl({ value: '', disabled: false }, Validators.required),
      codigoOcupacion: new FormControl({ value: '', disabled: false }, Validators.required),
      lugarExpedicion: new FormControl({ value: '', disabled: false }, Validators.required),
      numeroIdentificacion: new FormControl({ value: '', disabled: false }, Validators.required),
      identificacionCliente: new FormControl({ value: '', disabled: false }, Validators.required),
      nombreCompleto: new FormControl({ value: '', disabled: false }, Validators.required)
    })
  }
  load() {
    this.api.getClients().subscribe(

      response => {
        console.log("esto me retorno", response)
        this.setData(response);
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("error!");
      }
    )
  }

  setData(response) {
    this.formClient.get('codigoNaturalezaCliente').setValue(response[0].codigoNaturalezaCliente);
    this.formClient.get('codigoTipoIdent').setValue(response[0].codigoTipoIdent);
    this.formClient.get('codigoOcupacion').setValue(response[0].codigoOcupacion);
    this.formClient.get('lugarExpedicion').setValue(response[0].lugarExpedicion);
    this.formClient.get('numeroIdentificacion').setValue(response[0].numeroIdentificacion);
    this.formClient.get('identificacionCliente').setValue(response[0].identificacionCliente);
    this.formClient.get('nombreCompleto').setValue(response[0].nombreCompleto);
   
   
  }
  aceptar() {
    this.submitted = true;

    console.log("this.formClient.invalid", this.formClient.value)

    if (this.formClient.invalid) {
      return;
    }

    this.api.metodoPostCrear(this.formClient.value).subscribe(
      response => { console.log("Respuesta del metodo Crear", response) },
      error => { this.notificationsServices.toast("error!"); }
    );

  }

  actualizar() {
    this.submitted = true;

    console.log("Este objeto voy a actualizar", this.formClient.value)
    console.log("invalido", this.formClient.invalid)

    if (this.formClient.invalid) {
      return;
    }
    this.api.metodoPutEditar(this.formClient.value, this.formClient.value.identificacionCliente).subscribe(
      response => { console.log("Respuesta del metodo Editar", response ) },
      error => { this.notificationsServices.toast("error!"); }
    );

  }

}
