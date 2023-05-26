import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceConsultationComponent } from './components/balance-consultation/balance-consultation.component';
import { MovementConsultationComponent } from './components/movement-consultation/movement-consultation.component';
import { Route, RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { BalanceRegisterComponent } from './components/balance-register/balance-register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewBalanceRegisterComponent } from './components/new-balance-register/new-balance-register.component';
import { EditBalanceComponent } from './components/edit-balance/edit-balance.component';
import { IsAdminGuard } from '../../guards/is-admin/is-admin.guard';

const routes: Route[] = [
  { path: 'balance-consultation', component: BalanceConsultationComponent },
  { path: 'movement-consultation', component: MovementConsultationComponent },
  { path: 'balance-register', component: BalanceRegisterComponent, canActivate: [] },
]

@NgModule({
  declarations: [
    BalanceConsultationComponent,
    MovementConsultationComponent,
    BalanceRegisterComponent,
    NewBalanceRegisterComponent,
    EditBalanceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    MatDialogModule,
  ]
})
export class BalanceModule { }
