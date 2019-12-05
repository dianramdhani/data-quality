import { Component } from '@angular/core';

import { Menu, Type } from 'src/app/core/wrapper/menu.model';

@Component({
  selector: 'app-admin',
  template: '<app-wrapper [menus]="menus"></app-wrapper>'
})
export class AdminComponent {
  menus: Menu[];

  constructor() {
    this.menus = [
      {
        type: Type.LINK,
        label: 'Dashboard',
        icon: 'monitor',
        state: { to: '/admin/dashboard', params: {} }
      },
      {
        type: Type.LINK,
        label: 'Object Maker',
        icon: 'database',
        state: { to: '/admin/object-maker', params: {} }
      },
      {
        type: Type.LINK,
        label: 'Normalize Rule',
        icon: 'check-square',
        state: { to: '/admin/normalize-rule', params: {} }
      },
      {
        type: Type.LINK,
        label: 'Source Data Upload',
        icon: 'upload-cloud',
        state: { to: '/admin/source-data-upload', params: {} }
      }
    ];
  }
}