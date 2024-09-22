import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // },
  // {
  //   path: 'tab5',
  //   loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  // {
  //   path: 'attendance',
  //   loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  // },
  // {
  //   path: 'track',
  //   loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  // },
  // {
  //   path: 'tasks',
  //   loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  // },
  // {
  //   path: 'leads',
  //   loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  // },
  // {
  //   path: 'more',
  //   loadChildren: () => import('./tab5/tab5.module').then(m => m.Tab5PageModule)
  // },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
