import { Injectable } from '@angular/core';
import { User } from '../components/login/login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn =  false;

  login(user: User): boolean {
    if (user.username === 'ioay' && user.password === '1') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.username);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }

  isLogged() {
    return this.loggedIn;
  }
}
