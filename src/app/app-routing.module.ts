import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponentComponent } from './components/report-component/report-component.component';
import { PhoneUnloadingComponentComponent } from './components/phone-unloading-component/phone-unloading-component.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponentComponent },
  { path: 'phone', component: PhoneUnloadingComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
