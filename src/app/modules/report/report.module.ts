import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { Route, RouterModule } from '@angular/router';
import { ReportComponent } from './components/report/report.component';

const routes: Route[] = [
  { path: '', component: ReportComponent },
]


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
  ]
})
export class ReportModule { }
