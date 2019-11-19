import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.accountService.login(this.model);
    console.log(this.model.username);
    console.log(this.model.password);
    console.log(this.accountService.isLogged());
    this.router.navigate(['/main-modules']);
  }

}
