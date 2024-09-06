import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SerchPageComponent } from './pages/serch-page/serch-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SerchPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
