import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { UiModule } from '../ui/ui.module';

const routes: Route[] = [
  {
    path: 'balance',
    loadChildren: () => import('../balance/balance.module').then((m) => m.BalanceModule),
  },
  {
    path: 'report',
    loadChildren: () => import('../report/report.module').then((m) => m.ReportModule),
  }
]

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    UiModule,
  ]
})
export class DashboardModule { }
