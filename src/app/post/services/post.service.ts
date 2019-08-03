import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.apiUrl}posts`).pipe(
      map(post => post.map(p => this.titleToUpper(p)))
    );
  }

  getPostByParam(search: number) {
    return this.http.get<PostInterface>(`${this.apiUrl}posts/${search}`);
  }

  titleToUpper(post: PostInterface) {
    const { id, title, userId, body } = post;
    return {
      id,
      title: title.toUpperCase(),
      userId,
      body
    } as PostInterface;
  }
}
