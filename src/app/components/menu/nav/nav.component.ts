import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  logOut() {
    this.accountService.logout();
  }

  isLoggedin(): boolean {
    return this.accountService.isLogged();
  }

}
