import { Component } from '@angular/core';

import { Menu, Type } from 'src/app/core/wrapper/menu.model';

@Component({
  selector: 'app-user',
  template: '<app-wrapper [menus]="menus"></app-wrapper>',
})
export class UserComponent {
  menus: Menu[];

  constructor() {
    this.menus = [
      {
        type: Type.LINK,
        label: 'Dashboard',
        icon: 'monitor',
        state: { to: '/user/dashboard', params: {} }
      },
      {
        type: Type.LINK,
        label: 'Object Maker',
        icon: 'database',
        state: { to: '/user/object-maker', params: {} }
      },
      {
        type: Type.LINK,
        label: 'Normalize Rule V2',
        icon: 'check-square',
        state: { to: '/user/normalize-rule-v2', params: {} }
      },
      {
        type: Type.LINK,
        label: 'Source Data Upload',
        icon: 'upload-cloud',
        state: { to: '/user/source-data-upload', params: {} }
      }
    ];
  }
}
