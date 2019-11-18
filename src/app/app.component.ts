import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pot-tracker';

  constructor(private accountService: AccountService) {}

  isLoggedin(): boolean {
    return this.accountService.isLogged();
  }

  logOut() {
    this.accountService.logout();
  }
}
