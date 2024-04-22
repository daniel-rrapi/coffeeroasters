import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AboutComponent } from './views/about/about.component';
import { CreatePlanComponent } from './views/create-plan/create-plan.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { OverviewProfileComponent } from './components/overview-profile/overview-profile.component';
import { OrdersProfileComponent } from './components/orders-profile/orders-profile.component';
import { CheckoutComponent } from './views/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'create-your-plan',
    component: CreatePlanComponent,
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
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OverviewProfileComponent },
      { path: 'overview', component: OverviewProfileComponent },
      { path: 'your-orders', component: OrdersProfileComponent },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
