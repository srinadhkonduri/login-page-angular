import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    // when path is empty then itself login to login page
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    // 1 . login component
    // path is used to open in login page
    path: 'login',
    component: LoginComponent
  },
  {
    // 2 . layout component
    // this layout component is used when the user is logged in already in registered account then it will navigate to the layout folder
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];
