import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { CommonsModule } from '../commons/commons.module';
import { SearchResolveService } from './services/search-resolve.service';
import { PostService } from '../post/services/post.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonsModule,
    SearchRoutingModule
  ],
  providers: [
    SearchResolveService,
    PostService
  ]
})
export class SearchModule { }
