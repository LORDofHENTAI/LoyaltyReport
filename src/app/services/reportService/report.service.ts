import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/app/enveropment/enveropment';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/report-models/reportQuery';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }
  getReportMile = environment.apiUrl + 'CreateMileExcelFile/';
  getReportNovosel = environment.apiUrl + 'CreateNovoselExcelFile';
  getReportEmpty = environment.apiUrl + 'CreateExcelFile';
  getReportsMile(data: PostModel) {
    console.log(data)
    return this.httpClient.post(this.getReportMile, data, { responseType: 'blob' });
  }
  getReportsNovosel(data: PostModel) {
    console.log(data)
    return this.httpClient.post(this.getReportNovosel, data, { responseType: 'blob' });
  }
  getReportsNull(data: PostModel) {
    console.log(data)
    return this.httpClient.post(this.getReportEmpty, data, { responseType: 'blob' });
  }
}
