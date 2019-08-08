import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationsService {
  public loading;

  constructor(public snackBar: MatSnackBar) { }

   toast(message) {
     this.snackBar.open(message, 'Cerrar', {
       duration: 2000,
     })
  }
}
