import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PostService } from 'src/app/post/services/post.service';

@Injectable()
export class SearchResolveService implements Resolve<PostInterface[]> {

  constructor(
    private postService: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PostInterface[]> {
    const { search } = route.params;
    console.log(search);
    return this.postService.getPosts().pipe(
      map(post => post.filter(pt => this.findText(search, pt))
    ));
  }

  findText(text: string, post: PostInterface) {
    return post.body.indexOf(text) > -1 || post.title.indexOf(text) > -1;
  }
}
