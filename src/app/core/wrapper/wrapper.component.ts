import { Component, AfterViewInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { replace } from 'feather-icons';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Menu, Type } from './menu.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
  @Input() menus: Menu[];
  type = Type;
  scriptElements = [
    document.createElement('script'),
    document.createElement('script')
  ];
  user: User;

  constructor(private helper: JwtHelperService) {
    const storagePrefix = window['config']().STORAGEPREFIX;
    this.user = helper.decodeToken(localStorage.getItem(`${storagePrefix}-token`));
  }

  ngAfterViewInit() {
    this.scriptElements[0].src = './dashforge.js';
    this.scriptElements[1].src = './dashforge.aside.js';
    this.scriptElements.forEach(scriptElement => {
      document.body.appendChild(scriptElement);
    });
    replace();
  }

  ngOnDestroy() {
    this.scriptElements.forEach(scriptElement => {
      scriptElement.parentElement.removeChild(scriptElement);
    });
  }
}

interface User {
  sub: string,
  id: number,
  name: string
}