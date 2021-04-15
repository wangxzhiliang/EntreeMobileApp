import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'viewAllRestaurants',
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

    path: 'restaurantAdministration/createNewReservation',
    loadChildren: () => import('./restaurantAdministration/create-new-reservation/create-new-reservation.module').then( m => m.CreateNewReservationPageModule)
  },
  {

    path: 'restaurantAdministration/createNewReview/:restaurantId',
    loadChildren: () => import('./restaurantAdministration/create-new-review/create-new-review.module').then( m => m.CreateNewReservationPageModule)
  },
  {

    path: 'restaurantAdministration/createNewReview',
    loadChildren: () => import('./restaurantAdministration/create-new-review/create-new-review.module').then( m => m.CreateNewReservationPageModule)
  },
  {

    path: 'restaurantAdministration/createNewReservation/:restaurantId',
    loadChildren: () => import('./restaurantAdministration/create-new-reservation/create-new-reservation.module').then( m => m.CreateNewReservationPageModule)
  },
  {
    path: 'addCreditCard',
    loadChildren: () => import('./systemAdministration/add-credit-card/add-credit-card.module').then( m => m.AddCreditCardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'viewCreditCard',
    loadChildren: () => import('./systemAdministration/view-credit-card/view-credit-card.module').then( m => m.ViewCreditCardPageModule)
  },
  {
    path: 'viewMyReviews',
    loadChildren: () => import('./systemAdministration/view-my-reviews/view-my-reviews.module').then( m => m.ViewMyReviewsPageModule)
  },
  {
    path: 'viewReviewDetails/:reviewId',
    loadChildren: () => import('./systemAdministration/view-review-details/view-review-details.module').then( m => m.ViewReviewDetailsPageModule)
  },
  {
    path: 'viewMyVouchers',
    loadChildren: () => import('./systemAdministration/view-my-vouchers/view-my-vouchers.module').then( m => m.ViewMyVouchersPageModule)
  },
  {
    path: 'viewVoucherDetails/:customerVoucherId',
    loadChildren: () => import('./systemAdministration/view-voucher-details/view-voucher-details.module').then( m => m.ViewVoucherDetailsPageModule)
  },
  {
    path: 'viewMyReservations',
    loadChildren: () => import('./systemAdministration/view-my-reservations/view-my-reservations.module').then( m => m.ViewMyReservationsPageModule)
  },
  {
    path: 'viewMyTransactions',
    loadChildren: () => import('./systemAdministration/view-my-transactions/view-my-transactions.module').then( m => m.ViewMyTransactionsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
