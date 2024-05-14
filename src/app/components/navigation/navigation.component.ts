import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSiderComponent } from 'ng-zorro-antd/layout';
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzSubMenuComponent,
} from 'ng-zorro-antd/menu';
@Component({
  selector: 'bs-navigation',
  standalone: true,
  imports: [
    CommonModule,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSubMenuComponent,
    NzIconDirective,
    NzSiderComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Output() collapsedChange = new EventEmitter<boolean>();
  menus = [
    {
      level: 1,
      title: 'Orders',
      icon: 'audit',
    },
    {
      level: 1,
      title: 'Categories',
      icon: 'database',
    },
    {
      level: 1,
      title: 'Products',
      icon: 'barcode',
    },
    {
      level: 1,
      title: 'Website',
      icon: 'mail',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Website builder',
          icon: 'build',
          selected: false,
          disabled: false,
        },
        // {
        //   level: 2,
        //   title: 'Group 2',
        //   icon: 'bars',
        //   selected: false,
        //   disabled: false,
        // },
        // {
        //   level: 2,
        //   title: 'Group 3',
        //   icon: 'bars',
        //   selected: false,
        //   disabled: false,
        // },
      ],
    },
    {
      level: 1,
      title: 'Team Group',
      icon: 'team',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: 'user',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'User 2',
          icon: 'user',
          selected: false,
          disabled: false,
        },
      ],
    },
  ];
}
