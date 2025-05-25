import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ErrorModuleFederationComponent } from './shared/components/error-module-federation/error-module-federation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => loadRemoteModule('mfe1', './Component')
          .then((m) => m.AppComponent)
          .catch(() => ErrorModuleFederationComponent),
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
