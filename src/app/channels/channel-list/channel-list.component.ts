import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user/user.service";
import {PostService} from "../../post/post.service";
import {Observable} from "rxjs";
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html'
})
export class ChannelListComponent implements OnInit {
  public channels: Observable<any>;

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService, private sidebar: NbSidebarService) {
  }

  public ngOnInit(): void {
    this.getChannels()
  }

  public selectChannel(channel) {
    this.postService.setChannel(channel);
    this.sidebar.collapse();
  }

  public getChannels(id?): void {
    this.channels = this.userService.forceRefreshObservable(this.userService.getChannels(id));
  }

}
