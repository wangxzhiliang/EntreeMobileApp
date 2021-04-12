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
    path: 'viewAllRestaurants',
    loadChildren: () => import('./view-all-restaurants/view-all-restaurants.module').then( m => m.ViewAllRestaurantsPageModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
