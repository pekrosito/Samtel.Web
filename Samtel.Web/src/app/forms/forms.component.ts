import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';
import { NotificationsService } from './../notifications/notifications.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {
  formPerson: FormGroup;
  submitted = false;
  users: any;

  constructor(private api: UserService, public notificationsServices: NotificationsService,  private FB: FormBuilder) { }

  ngOnInit() {
    this.loadComponent();
    this.load();
  }

  load() {
    this.api.getSinVariable().subscribe(
      response => {        
        this.users = response.map(persona => {
          persona.edad = 1993;
          persona.nombreCompleto = persona.nombre + " -- " + persona.apellido;
          return persona;
      });
        this.setData(response);
      },
      error => {
        console.log("Error");
        this.notificationsServices.toast("error!");
      }
    )
  }

  loadComponent() {
    this.formPerson = this.FB.group({
      nombre: new FormControl({}, Validators.required),
      apellido: new FormControl({}, Validators.required),
      user: new FormControl({}, Validators.required)
    })
  }

  aceptar() {
    this.submitted = true;

    console.log("this.formPerson.invalid", this.formPerson.value)

    if (this.formPerson.invalid) {
      return;
    }
   
    this.api.metodoPutActualizar(this.formPerson.value).subscribe(
      response => {  console.log("respnse", response)},
      error => { this.notificationsServices.toast("error!"); console.log("error", error)}
    );

  }

  changeUser(event) {
    console.log("event", event)
  }

  setData(response) {
    this.formPerson.get('nombre').setValue(response[0].nombre);
    this.formPerson.get('apellido').setValue(response[0].apellido);
  }
}
