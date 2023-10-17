import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-cat',
    loadChildren: () => import('./admin/categoria-add/categoria-add.module').then( m => m.CategoriaAddPageModule)
  },
  {
    path: 'admin-cat-list',
    loadChildren: () => import('./admin/categoria-list/categoria-list.module').then( m => m.CategoriaListPageModule)
  },
  {
    path: 'admin-bod',
    loadChildren: () => import('./admin/bodega-add/bodega-add.module').then( m => m.BodegaAddPageModule)
  },
  {
    path: 'admin-bod-list',
    loadChildren: () => import('./admin/bodega-list/bodega-list.module').then( m => m.BodegaListPageModule)
  },
  {
    path: 'admin-page',
    loadChildren: () => import('./admin-page/admin-page.module').then( m => m.AdminPagePageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./tab3/register/register.module').then( m => m.RegisterPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
