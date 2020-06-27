import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})

export class UserService extends BaseService<any> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'user');
  }

  public postLogin(username: string, password: string): Observable<any> {
    if (username && password) {
      return this.httpClient.post(`${this.baseUrl}/${this.endPoint}/login`, {user: {username, password}});
      // .pipe(map(json => this.modelObj.fromItemJson(json)));
    }
    return EMPTY;
  }

  public getChannels(id): any {
    // return
    return this.httpClient.post(`${this.baseUrl}/channel/channels`, {id});
  }
}
