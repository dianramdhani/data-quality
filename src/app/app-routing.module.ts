import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AccountSettingsComponent } from './pages/user/account-settings/account-settings.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ObjectMakerComponent } from './pages/user/object-maker/object-maker.component';
import { NormalizeRuleComponent } from './pages/user/normalize-rule/normalize-rule.component';
import { SourceDataUploadComponent } from './pages/user/source-data-upload/source-data-upload.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'object-maker', component: ObjectMakerComponent },
      { path: 'normalize-rule', component: NormalizeRuleComponent },
      { path: 'source-data-upload', component: SourceDataUploadComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
