import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchResolveService implements Resolve<any> {

  constructor(
    private searchService: SearchService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params.search);
    return this.searchService.getPosts();
  }
}
