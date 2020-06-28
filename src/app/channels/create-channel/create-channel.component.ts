import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {UserService} from "../../user/user.service";
import {PostService} from "../../post/post.service";

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html'
})
export class CreateChannelComponent implements OnInit {

  public create: Observable<any>;

  public selectedUser: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService) {
  }

  public channelName: string;

  public createChannel(): void {
    this.create = this.postService.createChannel({userId: undefined, channelName: this.channelName})
      .pipe(tap(res => {
        // this.getChannels(this.userId)
      }));
  }

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // if (id || this.userId) {
    // console.log('userid found');

    this.selectUser(id);

    // this.testPosts = this.testPosts.filter(item => item.user === this.selectedUser);
    // this.getChannels(id);
    // }
  }

  // public login(user): void {
  // 	this.userService.postLogin(user.username, user.password).pipe(tap(u => {
  // 		console.log(u);
  // 		this.selectedUser = u;
  // 	}));
  // }


  public selectUser(id: string): void {
    this.selectedUser = this.userService.postDetails(id || this.userService.userId).pipe(tap(user => {
      console.log(user);
    }));
    // this.selectedUser = this.testUsers.reduce((prev, user) => {
    // 		if (user.id === id) {
    // 				return user;
    // 		}
    // });

  }

}
