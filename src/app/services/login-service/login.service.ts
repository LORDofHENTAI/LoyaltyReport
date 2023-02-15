import { Injectable } from '@angular/core';
import { environment } from 'src/app/enveropment/enveropment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginQuery } from 'src/app/models/login-models/login-query';
import { LoginResponse } from 'src/app/models/login-models/logiResponse';
import { LogoutStatus } from 'src/app/models/login-models/logout-status';
import { Logout } from 'src/app/models/login-models/logout';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = environment.apiUrl + 'auth/?data'; //адрес для логинизации
  private urlLogout = environment.apiUrl + 'logout/'; //адрес для логаута


  constructor(private http: HttpClient) { }

  getLogin(login: LoginQuery): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlLogin}`, login);
  }

  postLogout(login: Logout): Observable<LogoutStatus> {
    return this.http.post<LogoutStatus>(`${this.urlLogout}`, login);
  }
}
