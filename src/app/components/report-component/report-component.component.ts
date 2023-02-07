import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reportService/report.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.scss']
})
export class ReportComponentComponent implements OnInit {
  constructor(private reportService: ReportService) {

  }
  currentDate: Date
  ngOnInit(): void {
    this.currentDate = new Date();
  }
  GetReport() {
    this.reportService.getReports().subscribe({
      next:
        response => {
          let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          saveAs(blob, `${this.currentDate}.jpeg`);
        },
      error:
        error => {
          console.log(error);
        }
    })
  }

}
