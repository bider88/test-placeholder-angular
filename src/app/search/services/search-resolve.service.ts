import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';

@Injectable()
export class SearchResolveService implements Resolve<PostInterface[]> {

  constructor(
    private searchService: SearchService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params.search);
    return this.searchService.getPosts();
  }
}
