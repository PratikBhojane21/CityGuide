import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddschoolComponent } from './pages/admin/addschool/addschool.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateschoolComponent } from './pages/admin/updateschool/updateschool.component';
import { ViewschoolComponent } from './pages/admin/viewschool/viewschool.component';
import { ViewuserschoolComponent } from './pages/user/viewuserschool/viewuserschool.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ViewhotelComponent } from './pages/admin/viewhotel/viewhotel.component';
import { AddhotelComponent } from './pages/admin/addhotel/addhotel.component';
import { UpdatehotelComponent } from './pages/admin/updatehotel/updatehotel.component';
import { ViewplaceComponent } from './pages/admin/viewplace/viewplace.component';
import { AddplaceComponent } from './pages/admin/addplace/addplace.component';
import { UpdateplaceComponent } from './pages/admin/updateplace/updateplace.component';
import { ViewuserhotelComponent } from './pages/user/viewuserhotel/viewuserhotel.component';
import { ViewuserplaceComponent } from './pages/user/viewuserplace/viewuserplace.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
    children:[
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'school',
        component: ViewschoolComponent,
      },
      {
        path: 'addschool',
        component: AddschoolComponent,
      },
      {
        path: 'school/:sid',
        component: UpdateschoolComponent,
      },
      {
        path: 'hotel',
        component: ViewhotelComponent,
      },
      {
        path: 'addhotel',
        component: AddhotelComponent,
      },
      {
        path: 'hotel/:hid',
        component: UpdatehotelComponent,
      },
      {
        path: 'place',
        component: ViewplaceComponent,
      },
      {
        path: 'addplace',
        component: AddplaceComponent,
      },
      {
        path: 'place/:tid',
        component: UpdateplaceComponent,
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    // pathMatch: 'full',
    canActivate: [NormalGuard],
    children:[
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'userschool',
        component: ViewuserschoolComponent,
      },
      {
        path: 'userhotel',
        component: ViewuserhotelComponent,
      },
      {
        path: 'userplace',
        component: ViewuserplaceComponent,
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
