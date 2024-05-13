import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/authentication/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'website/builder',
    loadComponent: () =>
      import('./pages/website-builder/website-builder.component').then(
        (m) => m.WebsiteBuilderComponent
      ),
    data: {},
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/authentication/login/login.component').then(
        (m) => m.LoginComponent
      ),
    data: {},
  },
];
