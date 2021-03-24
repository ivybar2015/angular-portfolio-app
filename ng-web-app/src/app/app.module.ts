import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/myportfilio/home/home.component';
import { SkillComponent } from './components/myportfilio/skill/skill.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ChartComponent } from './charts/chart/chart.component';
import { AnimationComponent } from './charts/animation/animation.component';
import { AboutComponent } from './components/myportfilio/about/about.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';


// to impourt sdeclare a// class name of file .component.ts
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    RegistrationComponent,
    LoginComponent,
    ChartComponent,
    AnimationComponent,
    AboutComponent,
    BarChartComponent,
    PieChartComponent
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
