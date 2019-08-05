import { Component, OnInit } from '@angular/core';
import { UserService } from './../core/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styles: []
})
export class ProductAlertsComponent implements OnInit {
  users;

  constructor(private api: UserService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getSinVariable().subscribe(
      response => { this.users = response.map(users => {
        users.edad = 1993;
        return users;
      });
        this.snackBar.open('Barra de navegación', 'Cerrar', {
          duration: 2000,
        })
      },
      error => { console.log("Error")}
    )
  }

}
