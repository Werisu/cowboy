import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TitleComponent } from './title/title.component';
import { CardTypeAComponent } from './card-type-a/card-type-a.component';
import { CardTypeBComponent } from './card-type-b/card-type-b.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    TitleComponent,
    CardTypeAComponent,
    CardTypeBComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentesModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
