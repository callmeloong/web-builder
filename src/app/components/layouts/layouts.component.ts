import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NzLayoutComponent,
  NzHeaderComponent,
  NzFooterComponent,
  NzSiderComponent,
  NzContentComponent,
} from 'ng-zorro-antd/layout';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'bs-layouts',
  standalone: true,
  imports: [
    RouterOutlet,
    NzLayoutComponent,
    NzHeaderComponent,
    NzFooterComponent,
    NzSiderComponent,
    NzContentComponent,
    NavigationComponent,
  ],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
})
export class LayoutsComponent {
  collapsed = false;
}
