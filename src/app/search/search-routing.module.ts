import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResolveService } from './services/search-resolve.service';

const routes: Routes = [
  {
    path: ':search',
    component: SearchComponent,
    resolve: { search: SearchResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
