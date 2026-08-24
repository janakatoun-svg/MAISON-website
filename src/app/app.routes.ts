import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },

  {
    path: 'collections',
    loadComponent: () =>
      import('./collections/collections').then(
        m => m.Collections
      )
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(
        m => m.About
      )
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details').then(
        m => m.ProductDetails
      )
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login').then(
        m => m.Login
      )
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./register/register').then(
        m => m.Register
      )
  }
];