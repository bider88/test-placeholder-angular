import { NgModule } from '@angular/core';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [PostComponent, DetailPostComponent],
  imports: [
    CommonsModule,
    PostRoutingModule
  ]
})
export class PostModule { }
