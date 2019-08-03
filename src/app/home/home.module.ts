import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
