import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardGuard} from "./guards/auth-guard.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'monitor', loadChildren: () => import('./views/monitor/monitor.module').then(m => m.MonitorModule) },
  { path: 'student', canActivateChild: [AuthGuardGuard], loadChildren: () => import('./views/student/student.module').then(m => m.StudentModule) },
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
