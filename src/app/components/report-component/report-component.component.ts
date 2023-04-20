import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reportService/report.service';
import { saveAs } from 'file-saver';
import { FormGroup, FormControl } from '@angular/forms';
import { PostModel } from 'src/app/models/report-models/reportQuery';
import { TokenService } from 'src/app/services/token-service/token.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.scss']
})
export class ReportComponentComponent implements OnInit {
  constructor(private reportService: ReportService, private tokenService: TokenService) {

  }

  loadingResponce: boolean = false;
  reportDateStart: Date = new Date()
  nowFormatted: string;
  currentDate: Date

  ngOnInit(): void {
  }

  GetReportMile() {
    this.loadingResponce = true;
    this.nowFormatted = formatDate(this.reportDateStart, 'dd.MM.yyyy', 'en-US');
    this.reportService.getReportsMile(new PostModel(this.tokenService.getToken(), this.nowFormatted, this.tokenService.getLogin())).subscribe({
      next:
        response => {
          console.log(response);
          saveAs(response, `Отчет Миля ${this.nowFormatted}.xlsx`);
        },
      error:
        error => {
          console.log(error);
          this.loadingResponce = false;
        },
      complete:
        () => {
          this.loadingResponce = false;
        }
    })
  }
  GetReportNovosel() {
    this.loadingResponce = true;
    this.nowFormatted = formatDate(this.reportDateStart, 'dd.MM.yyyy', 'en-US');
    this.reportService.getReportsNovosel(new PostModel(this.tokenService.getToken(), this.nowFormatted, this.tokenService.getLogin())).subscribe({
      next:
        response => {
          saveAs(response, `Отчет Новосел ${this.reportDateStart}.xlsx`);
        },
      error:
        error => {
          console.log(error);
          this.loadingResponce = false;
        },
      complete:
        () => {
          this.loadingResponce = false;
        }
    })
  }
  GetReportNull() {
    this.loadingResponce = true;
    this.nowFormatted = formatDate(this.reportDateStart, 'dd.MM.yyyy', 'en-US');
    this.reportService.getReportsNull(new PostModel(this.tokenService.getToken(), this.nowFormatted, this.tokenService.getLogin())).subscribe({
      next:
        response => {
          saveAs(response, `Отчет обнуленные ${this.reportDateStart}.xlsx`);
        },
      error:
        error => {
          console.log(error);
          this.loadingResponce = false;
        },
      complete:
        () => {
          this.loadingResponce = false;
        }
    })
  }

}
