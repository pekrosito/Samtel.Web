import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ControlsComponent } from './controls/controls.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'controls', component: ControlsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'forms', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
