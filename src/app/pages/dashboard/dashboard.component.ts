import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {PostService} from "../../post/post.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public channelSelected: Observable<boolean>

  constructor(postService: PostService) {
    this.channelSelected = postService.subjectObservable.pipe(map(e => {
      return e !== undefined && e !== null;
    }));
  }

}
