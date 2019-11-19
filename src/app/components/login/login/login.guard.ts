import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Injectable()

export class LoginGuard implements CanActivate {

    constructor(private accountService: AccountService, private router: Router){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const logged = this.accountService.isLogged();

        if (logged) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
