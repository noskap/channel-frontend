import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// import {PostModel} from '../models/post.model';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseService<any> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'post',
    );
  }

  public createChannel(postObject): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/channel/create`, postObject);
  }
}
