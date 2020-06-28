import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {EMPTY, Observable, timer} from "rxjs";
import {BASE_API_URL} from "./utils/constants";
import {NbToastrService} from "@nebular/theme";
import {finalize, switchMap, tap} from "rxjs/operators";
import {RefreshService} from "./utils/refresh.service";


@Injectable()
export class BaseService<T> {
  public userId = '5ef808ab4be8f18e8e4ea2ab'
  protected baseUrl: string = BASE_API_URL;

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) protected endPoint: string,
    protected toasterService: NbToastrService,
    protected refreshService: RefreshService,
  ) {
  }

  /**
   * Forces StateChange to refresh
   */
  public forceDataRefresh(): void {
    this.refreshService.forceDataRefresh(this.endPoint);
  }

  /**
   * Takes an observable that will force refresh after 5 seconds or when this.forceDataRefresh() is called
   * @param observable Observable to refresh
   * @param initialFinalize Finalize for inner observable
   */
  public forceRefreshObservable(observable: Observable<any>, initialFinalize?: () => void): Observable<any> {
    return timer(0, 5000)
      .pipe(switchMap(() => this.refreshService.forceRefreshObservable(this.endPoint)),
        switchMap(() => observable.pipe(finalize(initialFinalize))));
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
