import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
