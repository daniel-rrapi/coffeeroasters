import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AboutComponent } from './views/about/about.component';
import { CreatePlanComponent } from './views/create-plan/create-plan.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { authGuard } from './auth/auth.guard';
import { OverviewProfileComponent } from './components/overview-profile/overview-profile.component';
import { OrdersProfileComponent } from './components/orders-profile/orders-profile.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { AddressCheckoutComponent } from './components/address-checkout/address-checkout.component';
import { PaymentCheckoutComponent } from './components/payment-checkout/payment-checkout.component';
import { ConfirmCheckoutComponent } from './components/confirm-checkout/confirm-checkout.component';
import { OrderGuard } from './guards/order.guard';
import { DoneCheckoutComponent } from './components/done-checkout/done-checkout.component';

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
    canActivate: [authGuard],
    children: [
      { path: '', component: OverviewProfileComponent },
      { path: 'overview', component: OverviewProfileComponent },
      { path: 'your-orders', component: OrdersProfileComponent },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: AddressCheckoutComponent },
      { path: 'address', component: AddressCheckoutComponent },
      { path: 'payment', component: PaymentCheckoutComponent },
      { path: 'confirm', component: ConfirmCheckoutComponent },
      { path: 'done', component: DoneCheckoutComponent },
    ],
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
