import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../@core/services/product.service';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzSpaceItemDirective } from 'ng-zorro-antd/space';
import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
} from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  NzFormControlComponent,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzSliderComponent } from 'ng-zorro-antd/slider';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bs-products',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    NzButtonComponent,
    NzSpaceItemDirective,
    NzDescriptionsComponent,
    NzDescriptionsItemComponent,
    NzTableModule,
    NzDividerComponent,
    NzTypographyComponent,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzInputDirective,
    NzSliderComponent,
    ReactiveFormsModule,
    NzColDirective,
    NzRowDirective,
    NzIconDirective,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  // _products = inject(ProductService);
  // _fb = inject(FormBuilder);

  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  listProduct: any = [];
  filter = this._fb.group({ name: '', minPrice: 0, maxPrice: 0 });

  constructor(private _fb: FormBuilder, private _products: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._products.getProducts().subscribe({
      next: (res) => {
        this.listProduct = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    this.checked = this.listProduct.every(({ id }: any) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      this.listProduct.some(({ id }: any) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listProduct.forEach(({ id }: any) =>
      this.updateCheckedSet(id, checked)
    );
    this.refreshCheckedStatus();
  }
}
