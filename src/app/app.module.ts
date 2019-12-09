import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// CORE
import { SpinnerComponent } from './core/spinner/spinner.component';
import { WrapperComponent } from './core/wrapper/wrapper.component';
import { AlertComponent } from './core/alert/alert.component';

// PAGES
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ObjectMakerComponent } from './pages/object-maker/object-maker.component';
import { ObjectFormComponent } from './pages/object-maker/object-form/object-form.component';
import { NormalizeRuleComponent } from './pages/normalize-rule/normalize-rule.component';
import { RuleFormComponent } from './pages/normalize-rule/rule-form/rule-form.component';
import { DuplicateFormComponent } from './pages/normalize-rule/duplicate-form/duplicate-form.component';
import { SourceDataUploadComponent } from './pages/source-data-upload/source-data-upload.component';
import { ListFileComponent } from './pages/source-data-upload/list-file/list-file.component';
import { ListDataComponent } from './pages/source-data-upload/list-data/list-data.component';
import { FindMatchComponent } from './pages/source-data-upload/find-match/find-match.component';
import { MergeFormComponent } from './pages/source-data-upload/merge-form/merge-form.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    WrapperComponent,
    AlertComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    ObjectMakerComponent,
    ObjectFormComponent,
    NormalizeRuleComponent,
    RuleFormComponent,
    DuplicateFormComponent,
    SourceDataUploadComponent,
    ListFileComponent,
    ListDataComponent,
    FindMatchComponent,
    MergeFormComponent,
    AccountSettingsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: () => {
          const config = window['config']();
          return {
            tokenGetter: () => localStorage.getItem(`${config.STORAGEPREFIX}-token`),
            headerName: 'token',
            authScheme: '',
            whitelistedDomains: config.whitelistedDomains,
            blacklistedRoutes: config.blacklistedRoutes
          };
        }
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent,
    RuleFormComponent,
    ObjectFormComponent,
    DuplicateFormComponent
  ]
})
export class AppModule { }