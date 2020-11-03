import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./ui/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./ui/role/role.module').then( m => m.RolePageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./modals/user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./ui/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./modals/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./ui/suppliers/suppliers.module').then( m => m.SuppliersPageModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./modals/supplier/supplier.module').then( m => m.SupplierPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./modals/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./ui/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'warehouse',
    loadChildren: () => import('./modals/warehouse/warehouse.module').then( m => m.WarehousePageModule)
  },
  {
    path: 'warehouses',
    loadChildren: () => import('./ui/warehouses/warehouses.module').then( m => m.WarehousesPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./modals/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./ui/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'stock-in',
    loadChildren: () => import('./modals/stock-in/stock-in.module').then( m => m.StockInPageModule)
  },
  {
    path: 'stock-out',
    loadChildren: () => import('./modals/stock-out/stock-out.module').then( m => m.StockOutPageModule)
  },
  {
    path: 'stock-ins',
    loadChildren: () => import('./ui/stock-ins/stock-ins.module').then( m => m.StockInsPageModule)
  },
  {
    path: 'stock-outs',
    loadChildren: () => import('./ui/stock-outs/stock-outs.module').then( m => m.StockOutsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
