import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [
    { 
        path: '', redirectTo: 'signup', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }
  