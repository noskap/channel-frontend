import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user.service";
import {PostService} from "../../post.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html'
})
export class ChannelListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService, private sidebar: NbSidebarService) {
  }

  public channels: Observable<any>;

  public ngOnInit(): void {
    this.getChannels()
  }

  public selectChannel(channel) {
    this.postService.setChannel(channel);
    this.sidebar.collapse();
  }

  public getChannels(id?): void {
    this.channels = this.userService.getChannels(id).pipe(tap(channels => {
      console.log(channels)
    }));
  }

}
