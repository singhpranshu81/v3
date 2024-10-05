import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { ContactusComponent } from './comps/contactus/contactus.component';
import { LoginComponent } from './comps/login/login.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfiletComponent } from './navigation/profilet/profilet.component';
import { CreateEmployeeComponent } from './navigation/create-employee/create-employee.component';
import { EditEmployeeComponent } from './navigation/edit-employee/edit-employee.component';
import { FindbyIdComponent } from './navigation/findby-id/findby-id.component';
import { FindbyEmailComponent } from './navigation/findby-email/findby-email.component';
import { FindbyemailPipe } from './pipes/findbyemail.pipe';
import { FindbyidPipe } from './pipes/findbyid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    DashboardComponent,
    ProfiletComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    FindbyIdComponent,
    FindbyEmailComponent,
    FindbyemailPipe,
    FindbyidPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
