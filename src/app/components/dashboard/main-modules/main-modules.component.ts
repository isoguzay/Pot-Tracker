import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-main-modules',
  templateUrl: './main-modules.component.html',
  styleUrls: ['./main-modules.component.css']
})
export class MainModulesComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    console.log('Now login: ', this.accountService.isLogged());
  }

}
