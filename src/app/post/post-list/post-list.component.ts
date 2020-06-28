import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PostService} from "../post.service";
import {switchMap, take, tap} from "rxjs/operators";
import {NbDialogRef, NbDialogService} from "@nebular/theme";
import {PostModel} from "../post.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  public selectedChannel: Observable<string>;
  public listObservable: Observable<Array<PostModel>>;
  @ViewChild('modal') public modal: TemplateRef<any>;
  public newPost: PostModel = new PostModel();
  public createPostObservable: Observable<PostModel>;
  public modalRef: NbDialogRef<any>;

  constructor(private postService: PostService, private modalService: NbDialogService) {
  }

  public ngOnInit(): void {
    this.selectedChannel = this.postService.subjectObservable;
    this.listObservable = this.postService.forceRefreshObservable(this.selectedChannel
      .pipe(switchMap(channel => this.postService.postList({
        channel,
        user: this.postService.userId,
      })))
    );
  }

  public openModal(): void {
    this.modalRef = this.modalService.open(this.modal, {
      context: {}
    });
  }

  public create(): void {
    this.createPostObservable = this.selectedChannel
      .pipe(take(1), switchMap((channel: string) => this.postService.create({
        ...this.newPost,
        channel,
        user: this.postService.userId
      })), tap(() => {
        this.modalRef.close();
        this.postService.forceDataRefresh();
        this.newPost = new PostModel()
      }));
  }
}
