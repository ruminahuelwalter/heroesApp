import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistePageComponent } from './pages/registe-page/registe-page.component';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
      LayoutPageComponent,
      LoginPageComponent,
      RegistePageComponent
    ],
  
})
export class AuthModule { }
