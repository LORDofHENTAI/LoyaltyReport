import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service/token.service';
import { LoginQuery } from 'src/app/models/login-models/login-query';
import { LoginResponse } from 'src/app/models/login-models/logiResponse';
import { SnakebarService } from 'src/app/services/snack-bar-service/snakebar.service';
import { LoginService } from 'src/app/services/login-service/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginUser = false;
  loginQuery: LoginQuery;
  value = 'Clear me';
  login: string
  password: string

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageFailLogin = 'Вход не разрешен, имя или пароль неверны.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';
  constructor(
    private router: Router,
    private titleService: Title,
    private loginService: LoginService,
    private tokenService: TokenService,
    private snackbarService: SnakebarService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Loya Mile');
  }

  onClickLogin() {

    this.loginService.getLogin(new LoginQuery(this.login, this.password)).subscribe({
      next: response => {
        if (this.checkResponse(response)) {
          this.tokenService.setCookie(response);
          this.tokenService.logEvent(true);
          this.router.navigate(['/report']);
        }
        else
          this.snackbarService.openSnackBar(this.messageFailLogin, this.action, this.styleNoConnect);
      },
      error: error => {
        console.log(error);
        this.snackbarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
      }
    });
  }

  checkResponse(response: LoginResponse): boolean {
    if (response)
      if (response.token)
        if (response.token.length > 0)
          return true;
        else return false;
      else return false;
    else return false;
  }
}
