import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ObjectRestService, AuthenticationRestService, UserRestService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private objectRest: ObjectRestService,
    private auth: AuthenticationRestService,
    private router: Router,
    private userRest: UserRestService
  ) { }

  ngOnInit() {
    const config = window['config']();
    console.log(config);

    this.objectRest.getYourObject()
      .subscribe(res => console.log(res));

    this.userRest.getUsers()
      .subscribe(res => console.log(res));
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}