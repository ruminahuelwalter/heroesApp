import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterOutlet } from '@angular/router';


@NgModule({
    declarations: [
      LayoutPageComponent,
      LoginPageComponent,
      RegisterPageComponent,
    ],
    imports: [
    RouterOutlet,
    CommonModule,
    AuthRoutingModule,
    MaterialModule
    ],
    exports: [],
    
  
})
export class AuthModule { }
