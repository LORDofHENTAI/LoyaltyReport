import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponentComponent } from './components/report-component/report-component.component';
import { PhoneUnloadingComponentComponent } from './components/phone-unloading-component/phone-unloading-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponentComponent,
    PhoneUnloadingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
