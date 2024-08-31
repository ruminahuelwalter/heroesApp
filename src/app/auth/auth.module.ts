import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
      LayoutPageComponent,
      LoginPageComponent,
      RegisterPageComponent
    ],
  
})
export class AuthModule { }
