import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'bs-product-details',
  standalone: true,
  imports: [PageHeaderComponent, NzButtonComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {}
