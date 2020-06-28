import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BaseService} from '../base.service';
import {NbToastrService} from "@nebular/theme";
import {map, shareReplay, tap} from "rxjs/operators";
import {PostModel} from "./post.model";
import {RefreshService} from "../utils/refresh.service";

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseService<PostModel> {
  private subject: Subject<any> = new Subject<any>()
  public subjectObservable: Observable<string> = this.subject.asObservable()
    .pipe(shareReplay(1));

  constructor(httpClient: HttpClient, private toastrService: NbToastrService, refreshService: RefreshService) {
    super(
      httpClient,
      'post',
      toastrService,
      refreshService,
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

  public create(postObject: PostModel): Observable<PostModel> {
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}/`, postObject)
      .pipe(map((res: PostModel) => res),
        tap(() => this.toastrService.success(`${this.endPoint} created.`)));
  }
}
