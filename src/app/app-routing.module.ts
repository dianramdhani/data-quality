import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/services';

import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ObjectMakerComponent } from './pages/user/object-maker/object-maker.component';
import { NormalizeRuleComponent } from './pages/user/normalize-rule/normalize-rule.component';
import { SourceDataUploadComponent } from './pages/user/source-data-upload/source-data-upload.component';
import { ListFileComponent } from './pages/user/source-data-upload/list-file/list-file.component';
import { ListDataComponent } from './pages/user/source-data-upload/list-data/list-data.component';
import { FindMatchComponent } from './pages/user/source-data-upload/find-match/find-match.component';
import { MergeFormComponent } from './pages/user/source-data-upload/merge-form/merge-form.component';
import { AccountSettingsComponent } from './pages/user/account-settings/account-settings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'object-maker', component: ObjectMakerComponent },
      { path: 'normalize-rule', component: NormalizeRuleComponent },
      {
        path: 'source-data-upload', component: SourceDataUploadComponent, children: [
          { path: '', component: ListFileComponent },
          { path: 'list-data', component: ListDataComponent },
          { path: 'list-data/find-match', component: FindMatchComponent },
          { path: 'list-data/find-match/merge-form', component: MergeFormComponent }
        ]
      },
      { path: 'account-settings', component: AccountSettingsComponent },
    ]
  },
  { path: '**', redirectTo: '/user/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }