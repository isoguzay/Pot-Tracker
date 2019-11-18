import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DriverComponent } from './components/dashboard/driver/driver.component';
import { LoginGuard } from './components/login/login/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'driver', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'driver', component: DriverComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
