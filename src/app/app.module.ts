import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { AccountService } from './services/account.service';
import { RightSideComponent } from './components/menu/right-side/right-side.component';
import { NavComponent } from './components/menu/nav/nav.component';
import { DriverComponent } from './components/dashboard/driver/driver.component';
import { LoginGuard } from './components/login/login/login.guard';
import { MainModulesComponent } from './components/dashboard/main-modules/main-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    RightSideComponent,
    DriverComponent,
    MainModulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
