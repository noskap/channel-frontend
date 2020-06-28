import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BaseService} from '../base.service';
import {NbToastrService} from "@nebular/theme";

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseService<any> {
  public subject: Subject<any> = new Subject<any>()

  constructor(httpClient: HttpClient, private toastrService: NbToastrService) {
    super(
      httpClient,
      'post',
      toastrService,
    );
  }

  public setChannel(value: string) {
    this.subject.next(value)
  }

  public createChannel(postObject): Observable<any> {
    if (!postObject.userId) {
      postObject.userId = this.userId;
    }
    return this.httpClient.post(`${this.baseUrl}channel/create`, postObject);
  }
}
