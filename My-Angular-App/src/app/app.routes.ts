import { Routes } from '@angular/router';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';
import { HomeComponent } from '../app/route-guards/home/home.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { WorkComponent } from './nav-bar/work/work.component';
import { ServicesComponent } from './nav-bar/services/services.component';
import { NewsComponent } from './nav-bar/news/news.component';
import { ContactComponent } from './nav-bar/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteEmployeeComponent } from './route-employee/route-employee.component';
import { RouteEmployeeDetailsComponent } from './route-employee-details/route-employee-details.component';
import { AngularServiceComponent } from './angular-service/angular-service.component';
import { ProvidersComponent } from './providers/providers.component';
import { AngularTokensComponent } from './Tokens/angular-tokens/angular-tokens.component';
import { FormsComponent } from './Angular-Template-driven/forms/forms.component';
import { FormComponent } from './Reactive-forms/form/form.component';
import { CustomComponent } from './custom-form-validators/custom/custom.component';
import { AdminComponent } from './route-guards/admin/admin.component';
import { testGuard } from './route-guards/test.guard';
import { LoginComponent } from './route-guards/login/login.component';
import { formGuardGuard } from './route-guards/form-guard.guard';
import { authGuard } from './route-guards/auth.guard';
import { ObservableComponent } from './Observables/observable/observable.component';
import { OperatorsComponent } from './RxJS/operators/operators.component';

export const routes: Routes = [
  // { path: 'route', component: AngularRoutingComponent }, //static routing
  // { path: '', component: AngularRoutingComponent }, //static routing
  // { path: 'home', component: HomeComponent }, //static routing
  // { path: 'about', component: AboutComponent }, //static routing
  // { path: 'work', component: WorkComponent }, //static routing
  // { path: 'service', component: ServicesComponent }, //static routing
  // { path: 'news', component: NewsComponent }, //static routing
  // { path: 'contact', component: ContactComponent }, //static routing

  // { path: 'route/employee/:empName/:empId', component: HomeComponent }, //dynamic routing

  // { path: '**', redirectTo: 'home' }, //undefined path redirect to home page

  // //children routes
  // {
  //   path: 'parent',
  //   component: AngularRoutingComponent,
  //   children: [
  //     { path: 'child1', component: HomeComponent },
  //     { path: 'child2', component: ServicesComponent },
  //   ],
  // },

  // // wildcard route
  // { path: '**', component: PageNotFoundComponent }, //wildcard routing ( helps in handling undefined routes )

  // // redirectTo
  // { path: '', redirectTo: '/work' ,pathMatch: 'full'}, //undefined path redirect to home page

  //Activated Route
  // {path:'employee/:id/:name',component:RouteEmployeeComponent}

  // Query Parameters
  { path: 'employee', component: RouteEmployeeComponent },

  // navigating routes
  { path: 'employee-detail', component: RouteEmployeeDetailsComponent },

  { path: 'service', component: AngularServiceComponent },
  // providers in services
  { path: 'provide', component: ProvidersComponent },

  //Angular Tokens
  { path: 'tokens', component: AngularTokensComponent },

  // Angular Template Driven Forms:
  { path: 'forms', component: FormsComponent },

  // Reactive Forms:
  { path: 'form', component: FormComponent },

  // Custom-form validators
  { path: 'custom', component: CustomComponent },

  //route Guards
  // { path: 'admin', component: AdminComponent, canActivate: [testGuard] },
  // { path: 'home', component: HomeComponent },
  // { path: 'form-guard', component: LoginComponent, canDeactivate: [formGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  //Observables or RxJS
  { path: 'obs', component: ObservableComponent },

  // RxJS Operators
  { path: 'rxjs', component: OperatorsComponent },
];
