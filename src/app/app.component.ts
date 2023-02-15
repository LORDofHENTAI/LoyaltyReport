import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './services/token-service/token.service';
import { environment } from './enveropment/enveropment';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoginUser = false;
  userName = '';
  isAdminIshop = false;
  title = 'LoyaltyReport';
  routName: any
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private location: Location,
  ) {
    this.tokenService.events$.forEach(value => { this.eventLogin(value) });
  }

  ngOnInit(): void {
    if (this.tokenService.isLoginUser()) {
      this.isLoginUser = true;
      this.userName = this.tokenService.getLogin();
      this.router.navigate(['/report']);
    }
    else {
      this.isLoginUser = false;
      this.router.navigate(['/login']);
    }
  }
  eventLogin(event: boolean) {
    if (event === true)
      this.isLoginUser = event;
    else {
      this.isLoginUser = event;
      this.router.navigate(['/login']);
    }
  }

  onClickLogout() {
    this.tokenService.deleteCookie();
    this.isLoginUser = false;
    this.router.navigate(['/login']);
  }

  isPathActiv(path: string) {
    return (path === this.location.path()) ? true : false;
  }

}
