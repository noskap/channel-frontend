import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {

  private refreshSubjectIndex: { [key: string]: BehaviorSubject<string>; } = {};

  public forceRefreshObservable(endPoint: string): Observable<string> {
    this.createSubject(endPoint);

    return this.refreshSubjectIndex[endPoint].asObservable();
  }

  public forceDataRefresh(endPoint: string): void {
    this.createSubject(endPoint);
    this.refreshSubjectIndex[endPoint].next(endPoint);
  }

  private createSubject(endPoint: string): void {
    if (this.refreshSubjectIndex[endPoint] === undefined) {
      this.refreshSubjectIndex[endPoint] = new BehaviorSubject<string>(null);
    }
  }
}
