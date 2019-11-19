import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DriverComponent } from './components/dashboard/driver/driver.component';
import { LoginGuard } from './components/login/login/login.guard';
import { MainModulesComponent } from './components/dashboard/main-modules/main-modules.component';


const routes: Routes = [
  { path: '', redirectTo: 'main-modules', pathMatch: 'full', canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'driver', component: DriverComponent, canActivate: [LoginGuard] },
  { path: 'main-modules', component: MainModulesComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
