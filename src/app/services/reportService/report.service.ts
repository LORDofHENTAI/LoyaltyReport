import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/app/enveropment/enveropment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }
  getReport = environment.apiUrl + 'CreateExcelFile';
  getReports() {
    console.log('get');
    // return this.httpClient.get('http://httpbin.org/image/jpeg', { responseType: 'blob' });
    return this.httpClient.post('http://192.168.1.122:7298/CreateExcelFile/', null, { responseType: 'blob' });
  }
}
