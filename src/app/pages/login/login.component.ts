import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthenticationRestService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  error: string;
  spinner = false;

  constructor(private auth: AuthenticationRestService, private router: Router, private helper: JwtHelperService) {
    this.formLogin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.auth.logout();
  }

  login() {
    this.auth.login(this.formLogin.value)
      .subscribe(
        token => {
          this.spinner = false;

          const user = this.helper.decodeToken(token);
          switch (user.role) {
            case 'ADMIN':
              this.router.navigate(['/user/dashboard']);
              break;
            case 'USER':
              this.router.navigate(['/user/dashboard']);
              break
          }
        },
        errMsg => {
          this.spinner = false;
          this.error = errMsg;
        }
      );
  }
}