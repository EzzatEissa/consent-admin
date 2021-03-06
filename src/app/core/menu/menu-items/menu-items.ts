import {Injectable} from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  label?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  label?: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'consent/home',
    name: 'Home',
    type: 'link',
    icon: 'icon-speedometer icons',
  },
  {
    state: 'consent/user',
    name: 'User',
    type: 'link',
    icon: 'fa fa-user',
  },
  {
    state: 'consent/app',
    name: 'Application',
    type: 'link',
    icon: 'fa fa-tablet',
  },
  {
    state: 'consent/permission',
    name: 'Permission',
    type: 'link',
    icon: 'fa fa-shield',
  }
  // ,
  // {
  //    state: 'dashboard',
  //    name: 'DASHBOARD',
  //    type: 'sub',
  //    icon: 'icon-speedometer icons',
  //    label: 'New',
  //    children: [
  //       { state: 'dashboard-v1', name: 'DASHBOARD 1' },
  //       { state: 'dashboard-v2', name: 'DASHBOARD 2' },
  //    ]
  // }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: any) {
    MENUITEMS.push(menu);
  }
}
