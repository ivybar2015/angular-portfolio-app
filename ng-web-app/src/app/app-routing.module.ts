import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  // to get the path for url
  // HomeComponent is class name of home.component.ts file
  {  path: '', component: HomeComponent },
  {  path: 'skill', component: SkillComponent },
  {  path: 'resgistration', component: RegistrationComponent },
  {  path: 'login', component: LoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
