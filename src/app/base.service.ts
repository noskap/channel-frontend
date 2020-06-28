import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {BASE_API_URL} from "./utils/constants";
import {NbToastrService} from "@nebular/theme";
import {tap} from "rxjs/operators";


@Injectable()
export class BaseService<T> {
  protected baseUrl: string = BASE_API_URL;
  public userId = '5ef808ab4be8f18e8e4ea2ab'

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) protected endPoint: string,
    protected toasterService: NbToastrService,
  ) {
  }

  /**
   * Post to list action in endpoint and return array of modelType
   *  postObject
   */
  public postList(postObject: Object): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}/list`, postObject);
    // .pipe(map((json: any) => this.modelObj.fromListJson(json)));
  }

  /**
   * Post to create action of endpoint and return an instance of modelType
   *  postObject
   */
  public postCreate(postObject: Object): Observable<any> {
    console.log(postObject);
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}/create`, postObject)
      .pipe(tap(() => this.toasterService.success(`${this.endPoint} created.`)));
    // .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
  }

  public postDetails(id: string): Observable<any> {
    if (id) {
      return this.httpClient.post(`${this.baseUrl}${this.endPoint}/details`, {id});
      // .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
    }
    return EMPTY;
  }

}
