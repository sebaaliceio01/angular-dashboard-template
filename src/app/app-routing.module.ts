import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/authenticated/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    loadChildren: () => import('./modules/root/root.module').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
