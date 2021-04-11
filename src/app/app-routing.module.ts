import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule),
    canActivate: [AuthGuard]
    },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  // {
  //   path: 'viewAllRecords',
  //   loadChildren: () => import('./view-all-records/view-all-records.module').then( m => m.ViewAllRecordsPageModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'createNewRecord',
  //   loadChildren: () => import('./create-new-record/create-new-record.module').then( m => m.CreateNewRecordPageModule),
  //   canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
