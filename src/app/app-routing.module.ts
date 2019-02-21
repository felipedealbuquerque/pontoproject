import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeLogInComponent } from './home-log-in/home-log-in.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homeLogIn', component: HomeLogInComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
