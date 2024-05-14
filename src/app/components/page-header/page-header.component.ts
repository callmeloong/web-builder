import { NgClass } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import {
  NzPageHeaderComponent,
  NzPageHeaderTitleDirective,
  NzPageHeaderSubtitleDirective,
  NzPageHeaderExtraDirective,
  NzPageHeaderContentDirective,
} from 'ng-zorro-antd/page-header';

@Component({
  selector: 'bs-page-header',
  standalone: true,
  imports: [
    NgClass,
    NzPageHeaderComponent,
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderContentDirective,
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input() ghost = false;
  @Input() title = '';
  @Input() subTitle = '';
}
