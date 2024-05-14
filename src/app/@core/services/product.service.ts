import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _http = inject(HttpClient);

  getProducts() {
    return this._http.get(`${environment.apiURL}/products`);
  }
}
