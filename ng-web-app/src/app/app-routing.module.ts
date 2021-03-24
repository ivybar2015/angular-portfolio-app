import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/myportfilio/home/home.component';
import { SkillComponent } from './components/myportfilio/skill/skill.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AboutComponent } from './components/myportfilio/about/about.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';



const routes: Routes = [
  // to get the path for url
  // HomeComponent is class name of home.component.ts file
  {  path: '', component: HomeComponent },
  {  path: 'history', component: SkillComponent },
  {  path: 'about', component: AboutComponent },
  {  path: 'resgistration', component: RegistrationComponent },
  {  path: 'login', component: LoginComponent },
  {  path: 'barchart', component: BarChartComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
