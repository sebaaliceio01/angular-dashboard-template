import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../dashboard/components/dashboard-layout/dashboard-layout.component';

const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RootModule { }
