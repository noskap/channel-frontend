import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {BASE_API_URL} from "./utils/constants";


@Injectable()
export class BaseService<T> {
  protected baseUrl: string = BASE_API_URL;

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) protected endPoint: string,
  ) {
  }

  /**
   * Post to list action in endpoint and return array of modelType
   *  postObject
   */
  public postList(postObject: Object): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${this.endPoint}/list`, postObject);
    // .pipe(map((json: any) => this.modelObj.fromListJson(json)));
  }

  /**
   * Post to create action of endpoint and return an instance of modelType
   *  postObject
   */
  public postCreate(postObject: Object): Observable<any> {
    console.log(postObject);
    return this.httpClient.post(`${this.baseUrl}/${this.endPoint}/create`, postObject);
    // .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
  }

  public postDetails(id: string): Observable<any> {
    if (id) {
      // window.console.log(`${this.baseUrl}/${this.endPoint}/details`, this.baseUrl, this.endPoint);
      return this.httpClient.post(`${this.baseUrl}/${this.endPoint}/details`, {id});
      // .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
    }
    return EMPTY;
  }

}
