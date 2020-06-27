import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../user.service";
import {PostService} from "../post.service";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  public channels: Observable<any>;

  public selectedUser: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService) {
  }

  public channelName: string;
  public selectedChannel: string;

  public createChannel(): void {
    this.postService.createChannel({userId: this.selectedUser.id, channelName: this.channelName})
      .pipe(tap(res => {
        window.console.log('channel created', res);
      }));
  }

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      console.log('userid found');

      this.selectUser(id);

      // this.testPosts = this.testPosts.filter(item => item.user === this.selectedUser);
      this.channels = this.userService.getChannels(id).pipe(tap(channels => {
        console.log(channels)
      }));
    }
  }

  // public login(user): void {
  // 	this.userService.postLogin(user.username, user.password).pipe(tap(u => {
  // 		console.log(u);
  // 		this.selectedUser = u;
  // 	}));
  // }

  public selectUser(id: string): void {
    this.selectedUser = this.userService.postDetails(id).pipe(tap(user => {
      console.log(user);
    }));
    // this.selectedUser = this.testUsers.reduce((prev, user) => {
    // 		if (user.id === id) {
    // 				return user;
    // 		}
    // });

  }

}
