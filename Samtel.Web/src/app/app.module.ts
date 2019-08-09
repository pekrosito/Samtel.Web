import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsService } from './notifications/notifications.component';
import { ControlsComponent } from './controls/controls.component';
import { TablesComponent } from './tables/tables.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HomeComponent,
    NavComponent,
    ControlsComponent,
    TablesComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
