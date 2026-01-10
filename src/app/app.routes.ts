import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'donate',
    loadComponent: () => import('./pages/donate/donate.page').then(m => m.DonatePage)
  },
  {
    path: 'download',
    loadComponent: () => import('./pages/download/download.page').then(m => m.DownloadPage)
  },
  {
    path: 'program',
    loadComponent: () => import('./pages/program/program.page').then(m => m.ProgramPage)
  },
  {
    path: 'career',
    loadComponent: () => import('./pages/career/career.page').then(m => m.CareerPage)
  },
  {
    path: 'program-view/:id',
    loadComponent: () => import('./pages/program-view/program-view.page').then(m => m.ProgramViewPage)
  },
  {
    path: 'program-apply/:id',
    loadComponent: () => import('./pages/program-apply/program-apply.page').then( m => m.ProgramApplyPage)
  },
  {
    path: 'program-payment/:id',
    loadComponent: () => import('./pages/program-payment/program-payment.page').then( m => m.ProgramPaymentPage)
  },


];
