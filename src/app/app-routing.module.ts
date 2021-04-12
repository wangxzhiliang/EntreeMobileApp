import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'createNewCustomer',
    loadChildren: () => import('./systemAdministration/create-new-customer/create-new-customer.module').then( m => m.CreateNewCustomerPageModule)
  },
  {
    path: 'updateCustomer',
    loadChildren: () => import('./systemAdministration/update-customer/update-customer.module').then( m => m.UpdateCustomerPageModule)
  },
  {
    path: 'voucher',
    loadChildren: () => import('./voucher/voucher.module').then( m => m.VoucherPageModule)
  },
  {
    path: 'checkoutVoucher',
    loadChildren: () => import('./checkout-voucher/checkout-voucher.module').then( m => m.CheckoutVoucherPageModule)
  },
  {
    path: 'checkoutVoucher/:voucherId',
    loadChildren: () => import('./checkout-voucher/checkout-voucher.module').then( m => m.CheckoutVoucherPageModule)
  },
  {
    path: 'viewAllRestaurants',
    loadChildren: () => import('./restaurantAdministration/view-all-restaurants/view-all-restaurants.module').then( m => m.ViewAllRestaurantsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'changePassword',
    loadChildren: () => import('./systemAdministration/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'restaurantAdministration/viewRestaurantDetails',
    loadChildren: () => import('./restaurantAdministration/view-restaurant-details/view-restaurant-details.module').then( m => m.ViewRestaurantDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurantAdministration/viewRestaurantDetails/:restaurantId',
    loadChildren: () => import('./restaurantAdministration/view-restaurant-details/view-restaurant-details.module').then( m => m.ViewRestaurantDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'addCreditCard',
    loadChildren: () => import('./systemAdministration/add-credit-card/add-credit-card.module').then( m => m.AddCreditCardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'viewCreditCard',
    loadChildren: () => import('./systemAdministration/view-credit-card/view-credit-card.module').then( m => m.ViewCreditCardPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
