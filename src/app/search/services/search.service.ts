import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<PostInterface[]>(`${this.apiUrl}posts`);
  }
}
