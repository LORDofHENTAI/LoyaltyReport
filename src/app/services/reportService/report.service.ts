import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/app/enveropment/enveropment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }
  getReport = environment.apiUrl + '';
  getReports() {
    console.log('get');
    return this.httpClient.get('http://httpbin.org/image/jpeg', { responseType: 'blob' });
  }
}
