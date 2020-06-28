import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {UserService} from "../../user/user.service";
import {PostService} from "../../post/post.service";

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html'
})
export class CreateChannelComponent {

  public create: Observable<any>;
  public channelName: string;

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService) {
  }

  public createChannel(): void {
    this.create = this.postService.createChannel({userId: undefined, channelName: this.channelName})
      .pipe(tap(res => {
        // this.getChannels(this.userId)
        this.channelName = undefined;
        this.userService.forceDataRefresh();
      }));
  }
}
