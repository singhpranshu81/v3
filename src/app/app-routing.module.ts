import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { ContactusComponent } from './comps/contactus/contactus.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProfiletComponent } from './navigation/profilet/profilet.component';
import { EditEmployeeComponent } from './navigation/edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './navigation/create-employee/create-employee.component';
import { FindbyIdComponent } from './navigation/findby-id/findby-id.component';
import { FindbyEmailComponent } from './navigation/findby-email/findby-email.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"about-us" ,component: AboutusComponent},
{path: "contact-us",component: ContactusComponent},
{path:"login", component: LoginComponent},
{path:"dashboard" , component: DashboardComponent , canActivate: [AuthGuard],  },
{path:"profile" , component: ProfiletComponent},
//{path:"edit-emp", component: EditEmployeeComponent},
{path:"edit-emp/:eid", component: EditEmployeeComponent},
{path:"create-emp", component: CreateEmployeeComponent},
{path:"find-emp-id", component: FindbyIdComponent},
{path:"find-emp-email", component: FindbyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
