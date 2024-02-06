import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    //because of this  by default  dashboard will be opened 
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, //default route
    {
        //this dynamically assigns the page to be opened 
        path:"login",component:LoginComponent
        //in path:url pattern is written  component:the component to be opened
        
    },
    {
        path:"register",component:RegistrationComponent
    },
    {
        path:"dashboard",component:DashboardComponent
    }
];
