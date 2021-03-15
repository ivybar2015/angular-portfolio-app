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
    AboutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
